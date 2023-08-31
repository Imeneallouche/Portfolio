import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/toast";

function POPUPtestimonial() {
  const [showModal, setShowModal] = React.useState(false);
  const toast = useToast();

  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Email || !Subject || !Message) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // Your EmailJS configuration
    const serviceID = "service_u3a7zkk";
    const templateID = "template_b9qx70b";
    const userID = "7Bu73u8LAaNPG8oUG";

    // Send the email using EmailJS API
    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_email: "li_allouche@esi.dz",
          from_email: Email,
          subject: Subject,
          message: Message,
        },
        userID
      )
      .then((response) => {
        toast({
          title: "Testimonial sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });

        // Clear form fields after successful submission
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast({
          title: "Error Occured!",
          description: "Check your network connection",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      });
  };
  return (
    <>
      <button
        className="border px-8 py-2 text-light-brown border-light-brown hover:text-brown hover:border-brown"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + add testimonial
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-grey outline-none focus:outline-none">
                <div className="flex items-start justify-between p-10 border-solid border-light-grey rounded-t">
                  <div>
                    <h1 className="text-xl text-light-grey font-bold">
                      Add your testimonial
                    </h1>
                    <h2 className="text-light-brown">
                      Feel free to add your feedback
                    </h2>
                  </div>
                  <button
                    className="p-1 text-3xl font-semibold text-light-grey bg-light-brown border-0 float-right leading-none outline-none focus:outline-none hover:bg-brown"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                */}
                <div className="relative px-6 flex-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="p-5 flex flex-col space-y-20"
                  >
                    <div class="relative z-0 w-full group">
                      <input
                        type="email"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b border-light-grey appearance-none dark:text-white dark:border-light-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                        placeholder=" "
                        //required
                      />
                      <label
                        for="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name
                      </label>
                    </div>
                    <div class="relative z-0 w-full group">
                      <input
                        type="text"
                        name="floating_subject"
                        value={Subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                        id="floating_subject"
                        className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b border-light-grey appearance-none dark:text-white dark:border-light-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                        placeholder=" "
                        //required
                      />
                      <label
                        for="floating_subject"
                        className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Profession
                      </label>
                    </div>
                    <div class="relative z-0 w-full group">
                      <input
                        type="text"
                        name="floating_message"
                        value={Message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        id="floating_message"
                        className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b border-light-grey appearance-none dark:text-white dark:border-light-grey dark:focus:border-light-brown focus:outline-none focus:ring-0 focus:border-light-brown peer"
                        placeholder=" "
                        //required
                      />
                      <label
                        for="floating_message"
                        className="peer-focus:font-medium absolute text-sm text-grey dark:text-light-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-brown peer-focus:dark:text-light-brown peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Testimonial
                      </label>
                    </div>
                    <div className="flex items-center justify-end p-6 border-light-grey rounded-b space-x-5">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-12 py-5 text-white bg-brown hover:bg-red"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="border px-12 py-5 text-light-brown border-light-brown hover:text-white hover:bg-light-brown"
                      >
                        Send Testimonial
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default POPUPtestimonial;
