import React from "react";
import { useTranslation } from "react-i18next";

const CLeftBox: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="CLeftBox">
      <div className="header">
        <h2>{t("ContactLeft.Title")}</h2>
        <h3>{t("ContactLeft.SubTitle")}</h3>
      </div>
      <form>
        <span>
          <input minLength={1} required type="name" />
          <label>{t("ContactLeft.Name")}</label>
        </span>
        <span>
          <input minLength={1} required type="email" />
          <label>{t("ContactLeft.Email")}</label>
        </span>
        <span>
          <input minLength={1} required type="tel" />
          <label>{t("ContactLeft.Phone")}</label>
        </span>
        <span>
          <textarea minLength={1} required></textarea>
          <label>{t("ContactLeft.Message")}</label>
        </span>
        <span>
          <input
            className="submitButton"
            value={`${t("ContactLeft.SendButton")} 📤`}
            type="submit"
          />
        </span>
      </form>
    </div>
  );
};

export default CLeftBox;
