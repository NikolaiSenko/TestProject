import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      {t("main page")}
      {t("main pag")}
    </div>
  );
};

export default MainPage;
