import React, { useState, useRef, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { appendMessage } from "../redux/sectionSlice";
import Header from "../components/Header";
import ProfilePhoto from "../assets/images/profile/profile-picture.png";

export default function Message() {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList);
  const [message, setMessage] = useState("");
  const sectionBottom = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the section whenever its content changes
    sectionBottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSend = () => {
    dispatch(appendMessage({ message: message }));
    setMessage("");
  };

  return (
    <div className="h-screen flex flex-col justify-between w-full">
      <div className="h-[calc(100%-4rem)] overflow-y-auto overflow-x-hidden">
        <Header title="Message" showBackArrow={true} />
        <div className="flex flex-col justify-center items-center p-7 space-y-2 text-center">
          <img
            src={ProfilePhoto}
            alt="Mayonk's Profile Photo"
            className="w-1/4 h-1/4 rounded-full items-center"
          />
          <p className="text-xl font-bold">Mayonk Kumar Behera</p>
          <p className="text-[#828181] text-sm">
            Software Engineer | Ex-SDE Intern'23 @Amazon <br /> ACM ICPC
            Regionalist'20
          </p>
          <div>
            <a
              href="mailto:mayonk.kumar9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <p className="text-[#1D9BF0] ml-2">mayonk.kumar9@gmail.com</p>
            </a>
          </div>

          <div className="flex flex-col w-full justify-center items-center pt-10">
            <input
              className="text-center placeholder:italic placeholder:text-gray-500 block bg-transparent w-2/3 border-2 border-gray-900 rounded-full p-3 mb-3 focus:outline-none focus:border-sky-500 sm:text-sm"
              placeholder="Your Name"
              type="text"
              name="Sender Name"
            />
            <input
              className="text-center placeholder:italic placeholder:text-gray-500 block bg-transparent w-2/3 border-2 border-gray-900 rounded-full p-3 focus:outline-none focus:border-sky-500 sm:text-sm"
              placeholder="your@mail.com"
              type="text"
              name="Sender MailId"
            />
            <p className="text-xs text-[#828181]">
              **To send annonynous message leave the above blank
            </p>
            <p className="text-xs text-[#828181]">
              **Can't reply anonymously, but I'll surely read your messages!
            </p>
            <div className="w-full text-left text-sm mt-24 justify-start">
              <div className="flex items-end space-x-3">
                <img
                  src={ProfilePhoto}
                  alt="DP"
                  className="h-8 w-8 rounded-full"
                />
                <p className="bg-[#181818] py-3 pr-2 pl-4 max-w-sm rounded-t-xl rounded-br-xl">
                  👋🏻 Hey there! Got something in mind? Whether it's a project or
                  just a hello, send a message
                </p>
              </div>
            </div>
            {messageList.length > 0 && (
              <div className="flex flex-col w-full items-end mt-3">
                <div className="flex items-end space-x-3">
                  <div className="flex flex-col items-end">
                    {messageList.map((message, index) => {
                      return (
                        <>
                          {index != messageList.length - 1 ? (
                            <p className="bg-[#1D9BF0] p-3 max-w-[80%] rounded-xl mb-2 text-left">
                              {message}
                            </p>
                          ) : (
                            <p className="bg-[#1D9BF0] py-3 pl-2 pr-4 max-w-[80%] rounded-t-xl rounded-bl-xl text-left">
                              {message}
                            </p>
                          )}
                        </>
                      );
                    })}
                  </div>
                  <BsFillPersonFill className="h-10 w-10 rounded-full bg-gray-900 p-2" />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* The below is a dummy div just to refer the bottom of the message section */}
        {/* so that we can scroll to the bottom of the message section whenever new  */}
        {/* message is sent so that the newest message is also in the view */}
        <div ref={sectionBottom}></div>
        {/* -------------------------- */}
      </div>
      <div className="bg-[#000] z-50 flex w-full space-x-4 px-3 justify-start items-center pb-4">
        <textarea
          type="text"
          rows={1}
          placeholder="Text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full py-2 pl-4 pr-2 bg-[#111] border-2 border-gray-900 rounded-full text-sm focus:outline-none resize-none"
        ></textarea>
        <FiSend className="w-7 h-7 cursor-pointer" onClick={handleSend} />
      </div>
    </div>
  );
}
