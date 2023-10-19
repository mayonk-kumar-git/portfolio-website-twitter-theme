import React, { useState, useRef, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import Header from "../components/Header";
import ProfilePhoto from "../assets/images/profile/profile-picture.webp";

export default function Message() {
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [message, setMessage] = useState("");

  const nameInputBoxRef = useRef(null);
  const mailIdInputBoxRef = useRef(null);
  const messageInputBoxRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleFormTyping = (event) => {
    if (event.key !== "Enter") return;

    if (event.target === nameInputBoxRef.current) {
      event.preventDefault();
      mailIdInputBoxRef.current.focus();
    } else if (event.target === mailIdInputBoxRef.current) {
      event.preventDefault();
      messageInputBoxRef.current.focus();
    }
  };

  const handleOnClickSend = (event) => {
    // we are prventing default so that the form doesn't
    // get submitted twice
    event.preventDefault();
    if (message.trim()) {
      event.target.form.submit();
    } else {
      alert(
        "I am already broke mann!! Please don't send blank messages and fill my server"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
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
          {/* Greeting message --------------- */}
          <div className="w-full text-left text-sm mt-4 justify-start">
            <div className="flex items-end space-x-3">
              <img
                src={ProfilePhoto}
                alt="DP"
                className="h-8 w-8 rounded-full"
              />
              <p className="bg-[#181818] py-3 pr-2 pl-4 max-w-[70%] rounded-t-xl rounded-br-xl">
                👋🏻 Hey there! Got something in mind? Whether it's a project or
                just a hello, send a message
              </p>
            </div>
          </div>
          {/* ------------------------------ */}
          <div className="flex flex-col w-full items-end mt-3">
            <form
              name="Portfolio website form"
              onKeyDown={handleFormTyping}
              action="https://formspree.io/f/meqbvbkv"
              method="POST"
            >
              <div className="flex items-end space-x-3">
                <div className="flex flex-col items-end space-y-4">
                  <p className="text-xs text-[#828181] mt-5 text-justify">
                    **To send annonynous message leave name and mailId blank. I
                    can't reply to reply to anonymous messages, but I'll surely
                    read your messages!
                  </p>
                  <input
                    ref={nameInputBoxRef}
                    className={`text-center placeholder:italic placeholder:text-gray-500 block w-[80%] border-2 border-gray-900 rounded-xl p-3 mb-3 focus:outline-none focus:border-sky-500 sm:text-sm ${
                      name.trim() ? " bg-sky-500" : "bg-black"
                    }`}
                    placeholder="Your Name"
                    type="text"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    ref={mailIdInputBoxRef}
                    className={`text-center placeholder:italic placeholder:text-gray-500 block w-[80%] border-2 border-gray-900 rounded-xl p-3 focus:outline-none focus:border-sky-500 sm:text-sm ${
                      mailId.trim() ? "bg-sky-500" : "bg-black"
                    }`}
                    placeholder="your@mail.com"
                    type="mail"
                    name="MailId"
                    value={mailId}
                    onChange={(e) => setMailId(e.target.value)}
                  />
                  <textarea
                    ref={messageInputBoxRef}
                    type="text"
                    rows={4}
                    placeholder="Text..."
                    value={message}
                    name="Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    className={`resize-none text-left placeholder:text-center placeholder:italic placeholder:text-gray-500 block w-[80%] border-2 border-gray-900 rounded-xl p-3 focus:outline-none focus:border-sky-500 sm:text-sm ${
                      message.trim() ? " bg-sky-500" : "bg-black"
                    }`}
                  ></textarea>
                  <div
                    className="flex justify-center items-center bg-[#1D9BF0] rounded-t-xl space-x-5 rounded-bl-xl px-4 py-2 cursor-pointer"
                    onClick={handleOnClickSend}
                  >
                    <input
                      ref={submitButtonRef}
                      type="submit"
                      value="Send"
                      className="cursor-pointer"
                    />
                    <FiSend className="w-5 h-5" />
                  </div>
                </div>
                <BsFillPersonFill className="h-10 w-10 rounded-full bg-gray-900 p-2" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* -------------------------- */}
    </div>
  );
}
