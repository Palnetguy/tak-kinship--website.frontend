import axios from "axios";
import "../css/clients.css";
import configHeaders from "./config-headers";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Clients = ({ setIsLoading }) => {
  // const clientInfoHead = [
  //   {
  //     num: 500,
  //     title: "Happy Clients",
  //   },
  //   {
  //     num: 60,
  //     title: "Hard Worker",
  //   },
  //   {
  //     num: 800,
  //     title: "Complete Project",
  //   },
  //   {
  //     num: 30,
  //     title: "Years Of Exprience",
  //   },
  // ];

  const clientInfoCards = [
    {
      title: "Latest Technologies",
      info: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur",
    },
    {
      title: "Uniqe Solutions",
      info: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur",
    },
    {
      title: "Powerful Strategies",
      info: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur",
    },
  ];

  const [clientInfoHead, setClientInfoHead] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const handleFetchWorkExperience = async () => {
      try {
        const response = await axios.get(
          "https://tak-devs-web-6dd969e7026b.herokuapp.com/api/work-experience/",
          {
            headers: configHeaders,
          }
        );
        setIsLoading(false);
        console.log(response);
        setClientInfoHead(response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    handleFetchWorkExperience();
  }, []);

  const [clientHead1Ref, clientHead1Inview] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [clientHead2Ref, clientHead2Inview] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [clientHead3Ref, clientHead3Inview] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [clientHead4Ref, clientHead4Inview] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [preTitleRef, preTitleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [titleRef, titleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [postTitleRef, postTitleInview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [clientContainer1Ref, clientContainer1Inview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [clientContainer2Ref, clientContainer2Inview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [clientContainer3Ref, clientContainer3Inview] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // const [noOfClients, setNoOfClients] = useState(0);

  // useEffect(() => {
  //   if (noOfClients === clientInfoHead[1].no_of_clients) {
  //     return;
  //   }
  //   setInterval(() => {
  //     setNoOfClients((prev) => prev + 1);
  //   }, 50);
  // }, [clientHead1Inview]);

  function animateValue(id, maxValue) {
    var obj = document.getElementById(id);
    var current = parseInt(obj.innerHTML, 10); // Parse the current value to an integer

    var intervalTime = Math.floor(1000 / maxValue); // Adjust interval time based on maxValue
    var intervalId = setInterval(function () {
      if (current < maxValue) {
        current++;

        // Update the innerHTML with the new value
        obj.innerHTML = current;
      } else {
        clearInterval(intervalId); // Stop the interval when reaching the maxValue
      }
    }, intervalTime);
  }

  // useEffect(() => {
  //   animateValue("test", 10); // Set maxValue to 10
  // }, []); // Add an empty dependency array to run the effect only once

  useEffect(() => {
    if (clientHead1Inview) {
      if (clientInfoHead.length > 0) {
        animateValue("no_of_clients", clientInfoHead[0].no_of_clients);
      }
    }
  }, [clientInfoHead, clientHead1Inview]);
  useEffect(() => {
    if (clientHead1Inview) {
      if (clientInfoHead.length > 0) {
        animateValue(
          "no_of_complete_projects",
          clientInfoHead[0].no_of_complete_projects
        );
      }
    }
  }, [clientInfoHead, clientHead2Inview]);
  useEffect(() => {
    if (clientHead1Inview) {
      if (clientInfoHead.length > 0) {
        animateValue(
          "years_of_experience",
          clientInfoHead[0].years_of_experience
        );
      }
    } else {
    }
  }, [clientInfoHead, clientHead3Inview]);

  return (
    <div className="clients">
      {clientInfoHead.map((e) => (
        <div className="clientsHeader">
          <div className="" ref={clientHead1Ref}>
            <div
              // className="info"
              key={e.id}
              className={`info clientHeadNotSeen ${
                clientHead1Inview ? "clientHeadInView" : ""
              }`}
            >
              {/* <div className="counter">{e.no_of_clients}</div> */}
              <div className="counter" id="no_of_clients">
                0
              </div>
              <div className="title-2">Happy Clients</div>
            </div>
          </div>

          <div className="" ref={clientHead2Ref}>
            <div
              // className="info"
              key={e.id}
              className={`info clientHeadNotSeen ${
                clientHead2Inview ? "clientHeadInView" : ""
              }`}
            >
              <div className="counter">{e.no_of_workers}</div>
              <div className="title-2">Hard Worker</div>
            </div>
          </div>
          <div className="" ref={clientHead3Ref}>
            <div
              // className="info"
              key={e.id}
              className={`info clientHeadNotSeen ${
                clientHead3Inview ? "clientHeadInView" : ""
              }`}
            >
              {/* <div className="counter">{e.no_of_complete_projects}</div> */}
              <div className="counter" id="no_of_complete_projects">
                0
              </div>
              <div className="title-2">Complete Project</div>
            </div>
          </div>

          <div className="" ref={clientHead4Ref}>
            <div
              // className="info"
              key={e.id}
              className={`info clientHeadNotSeen ${
                clientHead4Inview ? "clientHeadInView" : ""
              }`}
            >
              {/* <div className="counter">{e.years_of_experience}</div> */}
              <div className="counter" id="years_of_experience">
                0
              </div>
              <div className="title-2">Years Of Exprience</div>
            </div>
          </div>
        </div>
      ))}

      <div className="content">
        <h4
          className={`pretitle titleNotSeen ${
            preTitleInview ? "titleInView" : ""
          }`}
          ref={preTitleRef}
          // className="pretitle"
        >
          WHY CHOOSE US
        </h4>
        <h1
          // className="title"
          className={`title titleNotSeen ${titleInview ? "titleInView" : ""}`}
          ref={titleRef}
        >
          Why Our Clients Choose Us
        </h1>
        <p
          className={`post-title titleNotSeen ${
            postTitleInview ? "titleInView" : ""
          }`}
          ref={postTitleRef}
        >
          As A Matter Of Fact The Unification Of The Coherent Software Provides
          A Strict Control Over The Accomplishment Of Intended Estimation
        </p>
        <div className="whychooseusContainers">
          {/* {clientInfoCards.map((e, index) => (
            <div className="box">
              <h1>{index <= 9 ? `0${index + 1}.` : `${index + 1}.`}</h1>

              <h4 className="title-2">{e.title}</h4>
              <p>{e.info}</p>
            </div>
          ))} */}

          <div ref={clientContainer1Ref}>
            <div
              // className=""
              className={`box boxToLeft ${
                clientContainer1Inview ? "boxInView" : ""
              }`}
            >
              <h1>{`01.`}</h1>
              {/* <h1>{index}</h1> */}
              <h4 className="title-2">{clientInfoCards[0].title}</h4>
              <p>{clientInfoCards[0].info}</p>
            </div>
          </div>

          <div ref={clientContainer2Ref}>
            <div
              // className="box boxToTop"
              className={`box boxToTop ${
                clientContainer2Inview ? "boxInView" : ""
              }`}
            >
              <h1>{`02.`}</h1>
              {/* <h1>{index}</h1> */}
              <h4 className="title-2">{clientInfoCards[1].title}</h4>
              <p>{clientInfoCards[1].info}</p>
            </div>
          </div>

          <div ref={clientContainer3Ref}>
            <div
              // className="box boxToRight"
              className={`box boxToRight ${
                clientContainer3Inview ? "boxInView" : ""
              }`}
            >
              <h1>{`03.`}</h1>
              {/* <h1>{index}</h1> */}
              <h4 className="title-2">{clientInfoCards[2].title}</h4>
              <p>{clientInfoCards[2].info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
