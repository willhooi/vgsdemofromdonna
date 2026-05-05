import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "VietGuys cung cấp những giải pháp tiếp thị di động nào?",
    a: "VietGuys cung cấp hệ sinh thái đa kênh gồm SMS Brandname, SMS Fixed, SMS Short Code, Viber Message, Zalo ZNS, Email Marketing & OTP, Voice Brandname & OTP, Mobile Topup, Smart Warranty, OTPBox và các giải pháp tuỳ biến (Customized Solutions) cho doanh nghiệp.",
  },
  {
    q: "Hệ thống của VietGuys có đảm bảo bảo mật và tốc độ không?",
    a: "Có. VietGuys là một trong số ít công ty quảng cáo sở hữu chứng chỉ ISO 27001:2013 về An ninh thông tin, được cấp chứng chỉ VNCERT bởi Bộ TT&TT, vận hành nhiều server back-up đảm bảo dịch vụ luôn ổn định và tốc độ gửi tin tính bằng giây.",
  },
  {
    q: "Quy mô vận hành của VietGuys ra sao?",
    a: "Hơn 15 năm kinh nghiệm, phục vụ hơn 5,000 nhãn hàng và gửi đi khoảng 5,000,000 tin nhắn SMS & Email mỗi ngày. Đội ngũ chuyên gia hỗ trợ khách hàng 24/7.",
  },
  {
    q: "Lợi ích sau khi VietGuys M&A với Accrete Inc. (Nhật Bản) là gì?",
    a: "Sau thương vụ M&A cùng Accrete Inc., VietGuys được tăng cường năng lực công nghệ AI/CDP, mở rộng giải pháp Account Intelligence và áp dụng quy chuẩn vận hành Nhật Bản, giúp khách hàng enterprise tiếp cận giải pháp tiếp thị thế hệ mới.",
  },
  {
    q: "VietGuys có thể tích hợp với hệ thống CRM hiện tại của doanh nghiệp không?",
    a: "Có. Nền tảng của VietGuys được thiết kế linh hoạt, tương thích và kết nối API với nhiều hệ thống CRM, ERP, eCommerce trong nước và quốc tế. Đội ngũ kỹ thuật sẽ tuỳ biến theo từng nhu cầu của khách hàng.",
  },
  {
    q: "Làm sao để nhận tư vấn và báo giá từ VietGuys?",
    a: "Quý khách có thể liên hệ trực tiếp qua hotline 028-7300-8027, sử dụng AI Chat ngay trên website, hoặc bấm “Talk to Expert” để được chuyên gia của VietGuys tư vấn giải pháp phù hợp trong vòng 24 giờ.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container-tight grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <span className="eyebrow">FAQ</span>
        <h2 className="heading-section mt-3">
          Câu hỏi <span className="text-primary">thường gặp</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Những thông tin quan trọng nhất về dịch vụ, bảo mật và quy trình triển khai của VietGuys.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5">
          <p className="text-sm font-semibold text-foreground">Bạn cần câu trả lời cụ thể hơn?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Đội ngũ chuyên gia sẵn sàng tư vấn 24/7.
          </p>
          <a
            href="tel:02873008027"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-deep"
          >
            📞 028-7300-8027
          </a>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-border first:border-t"
          >
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
