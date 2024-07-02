import { useTranslation } from "react-i18next";

export function Jobs() {
    const {t} = useTranslation()
  return (
    <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-[28px] font-semibold mr-14">
              {t("tituloVaga")}
            </h2>
            <p className="text-base text-[18px] mb-2">{t("informacoes")}</p>
          </div>
          <img
            src="https://via.placeholder.com/75"
            alt="Logo da ONG"
            className="object-cover rounded-[10px]"
          />
        </div>
      </div>

      <p className="font-[500] pl-1">{t("requisitos")}</p>
      <ul className=" text-[18px] font-[500] list-disc p-7">
        <li>{t("requisitoa")}</li>
        <li>{t("requisitoa")}</li>
        <li>{t("requisitoa")}</li>
      </ul>
      <div className="text-center">
        <button className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]">
          {t("candidatar")}
        </button>
      </div>
    </section>
  );
}
