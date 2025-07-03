import { Icon } from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MATERIALS = [
  {
    label:
      "Совещание с территориальными органами ФАС России и уполномоченными органами субъектов Российской Федерации.",
    lector: "Цакоев Х.В.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%A6%D0%B0%D0%BA%D0%BE%D0%B5%D0%B2%20%D0%92%D0%9A%D0%A1%20%D0%A2%D0%9E%2B%D0%A3%D0%9E%2025.06.2025%20_%D0%98%D0%A2%D0%9E%D0%93.pptx",
  },
  {
    label:
      "Правоприменительная практика. Наиболее часто встречающиеся нарушения Закона о контрактной системе.",
    lector: "Цакоев Х.В.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%A6%D0%B0%D0%BA%D0%BE%D0%B5%D0%B2%20%D0%AF%D0%BA%D1%83%D1%82%D1%81%D0%BA%2044-%D0%A4%D0%97%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%2028.06.2025.pptx",
  },
  {
    label: "Практика применения Закона № 223-ФЗ. Обзор нарушений.",
    lector: "Цакоев Х.В.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%A6%D0%B0%D0%BA%D0%BE%D0%B5%D0%B2%20%D0%AF%D0%BA%D1%83%D1%82%D1%81%D0%BA%202%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%20223-%D0%A4%D0%97%2028.06.2025.pptx",
  },
  {
    label:
      "Развитие институтов национального режима в закупочной деятельности: актуальные изменения в 44-ФЗ и 223-ФЗ.",
    lector: "Вергунова О.В.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%92%D0%B5%D1%80%D0%B3%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%201%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%201875%20(%D1%80%D0%B5%D0%B4.879).pptx",
  },
  {
    label:
      "Современные вызовы и направления правоприменительной практики законодательства о контрактной системе.",
    lector: "Вергунова О.В.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/%D0%92%D0%B5%D1%80%D0%B3%D1%83%D0%BD%D0%BE%D0%B2%D0%B0%202%20%D0%9E%D0%B1%D0%B7%D0%BE%D1%80%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8.pptx",
  },
  {
    label:
      "Перспективы развития государственных закупок: стратегические ориентиры и актуальные вызовы",
    lector: "Борвых Ю.С.",
    link: "https://zakupki.sakha.gov.ru/webtorgi2016/upload/%D0%B2%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%80/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/27062025_%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D1%8B%D1%85%20%D0%AE.%D0%A1.ppt",
  },
];

export function Materials() {
  return (
    <div
      id="materials"
      className="flex flex-col gap-5 w-full px-5 lg:px-10  pt-5 pb-10 bg-background-primary/90 text-text-secondary"
    >
      <div className="flex flex-col gap-2.5">
        <h2 className="text-center text-main-secondary">Материалы</h2>
        <p className="typo-sub-title text-center text-text-tertiary">
          Видеозапись и презентации с конференции
        </p>
      </div>
      <iframe
        src="https://vk.com/video_ext.php?oid=-211791980&id=456239046&hd=4&autoplay=1"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        className="aspect-video rounded-lg"
      />

      <Table className="bg-background-secondary rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="p-4">Лектор</TableHead>
            <TableHead className="p-4">Тема</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MATERIALS.map((m, i) => (
            <TableRow
              key={i}
              onClick={() => window.open(m.link, "_blank")}
              className="hover:bg-background-primary cursor-pointer"
            >
              <TableCell className="p-4">{m.lector}</TableCell>
              <TableCell>{m.label}</TableCell>
              <TableCell>
                <Icon type="download" color="main" size="md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
