const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function createFaq() {
  faqData.forEach((data) => {
    const faq = document.createElement("div");
    accordianBody.append(faq);
    faq.classList.add("faq");
    //
    const faqHeader = document.createElement("h3");
    faq.append(faqHeader);
    faqHeader.innerText = data.question;
    faqHeader.classList.add("faq_header");
    //
    const faqBtn = document.createElement("button");
    faqHeader.append(faqBtn);
    faqBtn.innerText = "+";
    faqBtn.classList.add("show_btn");
    //
    const faqAns = document.createElement("p");
    faq.append(faqAns);
    faqAns.innerText = data.answer;
    faqAns.classList.add("hidden");
  });
}

function btnStatusUpdate() {
  const faq = document.querySelectorAll(".faq");
  faq.forEach((fq) => {
    console.log(fq.children.item(1), "chollfrgs");
    fq.children
      .item(0)
      .children.item(0)
      .addEventListener("click", () => {
        fq.children.item(1).classList.toggle("hidden");
      });
  });
}

createFaq();
btnStatusUpdate();
