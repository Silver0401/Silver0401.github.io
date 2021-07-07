import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const CLeftBox: React.FC = () => {
  const { t } = useTranslation();
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const NameRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PhoneRef = useRef<HTMLInputElement>(null);
  const FormRef = useRef<HTMLFormElement>(null);

  const SendData = () => {
    setIsButtonLoading(true);

    emailjs
      .send(
        "service_h86ldsp",
        "template_e3dgd7j",
        {
          subject: "Contácto desde Portafolio Web",
          name: NameRef.current?.value,
          message: MessageRef.current?.value,
          to_email: "prosilver05@gmail.com",
          from_email: `Email: ${EmailRef.current?.value} Tel: ${PhoneRef.current?.value}`,
        },
        "user_TpS9YP6Fwr4okNaN6XOOH"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsButtonLoading(false);
          toast.success("Mensaje enviado!");
          FormRef.current?.reset();
        },
        (err) => {
          console.log("FAILED...", err);
          setIsButtonLoading(false);
          toast.error("Ocurrio un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="CLeftBox">
      <div className="header">
        <h2>{t("ContactLeft.Title")}</h2>
        <h3>{t("ContactLeft.SubTitle")}</h3>
      </div>
      <form
        ref={FormRef}
        onSubmit={(e) => {
          e.preventDefault();
          SendData();
        }}
      >
        <span>
          <input ref={NameRef} minLength={1} required type="name" />
          <label>{t("ContactLeft.Name")}</label>
        </span>
        <span>
          <input ref={EmailRef} minLength={1} required type="email" />
          <label>{t("ContactLeft.Email")}</label>
        </span>
        <span>
          <input ref={PhoneRef} minLength={1} required type="tel" />
          <label>{t("ContactLeft.Phone")}</label>
        </span>
        <span>
          <textarea ref={MessageRef} minLength={1} required></textarea>
          <label>{t("ContactLeft.Message")}</label>
        </span>
        <span>
          {/* <input
            className="submitButton"
            value={`${t("ContactLeft.SendButton")} 📤`}
            type="submit"
          /> */}

          <Button
            className="submitButton"
            isLoading={isButtonLoading}
            type="submit"
          >
            <p>{`${t("ContactLeft.SendButton")} 📤`}</p>
          </Button>
        </span>
      </form>
    </div>
  );
};

export default CLeftBox;
