(async () => {
  if (window.ACC_READY) await window.ACC_READY;
  const c = window.ACC_CONTENT || {};
  for (const [id, html] of Object.entries(c)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  if (typeof window.initPractice === "function") window.initPractice();
})();

window.initPractice === "function") window.initPractice();
})();

window.initPractice = function initPractice() {
const part1 = [
["A customer owes us for services already performed.", "Accounts receivable — current asset"],
["We owe an invoicing supplier for inventory received.", "Accounts payable — current liability"],
["Employees worked in March but are paid in April.", "Accrued expenses — current liability"],
["We paid 12 months of rent up front on day one.", "Prepaid expense — current asset"],
["A customer prepaid for catering we deliver in June.", "Deferred revenue — current liability"],
["Cumulative decline in a van's recorded value.", "Accumulated depreciation — contra long-term asset"],
["Premium paid above an acquired firm's identifiable value.", "Goodwill — long-term intangible asset"],
["The rice, foil, and burrito rollers' wages at Chipotle.", "Cost of goods sold — income statement"],
["Cash received from an investor for shares.", "Common stock — equity, with cash as the asset"],
["A loan the company repays in four years.", "Long-term debt — long-term liability"],
["Marketing manager's salary.", "Operating expense — income statement"],
["Profit kept in the business instead of paid out.", "Retained earnings — equity"],
];

const part3 = [
["We deliver $8,000 of product; the customer pays in 60 days.", "Revenue $8,000 now. Accounts receivable, not cash."],
["We receive $9,000 on Jan 1 for a service delivered in March.", "No revenue in January. Cash ↑, deferred revenue ↑."],
["We pay $6,000 on Mar 1 for six months of rent.", "Expense only $1,000 in March. Prepaid expense $5,000."],
["Utilities used in May, bill arrives in June, paid in July.", "Expense in May. Accrued expense (no invoice yet in May)."],
["We buy a $60,000 machine with cash, useful life 5 years.", "No expense at purchase. Cash ↓, PP&E ↑. Then $12,000/year."],
["We pay a $4,000 dividend.", "Not an expense. Retained earnings ↓ and cash ↓."],
];

function fillTable(id, rows, show) {
const body = document.getElementById(id);
body.innerHTML = rows.map((r, i) => `
<tr>
<td>${i + 1}</td>
<td>${r[0]}</td>
<td>${show ? r[1] : "—"}</td>
</tr>
`).join("");
}

let show1 = false, show2 = false, show3 = false;
fillTable("part1-body", part1, false);
fillTable("part3-body", part3, false);

document.getElementById("toggle1").onclick = () => {
show1 = !show1;
fillTable("part1-body", part1, show1);
document.getElementById("toggle1").textContent = show1 ? "Hide answers" : "Reveal answers";
};
document.getElementById("toggle2").onclick = () => {
show2 = !show2;
document.getElementById("part2-sol").classList.toggle("hidden", !show2);
document.getElementById("toggle2").textContent = show2 ? "Hide solution" : "Reveal solution";
};
document.getElementById("toggle3").onclick = () => {
show3 = !show3;
fillTable("part3-body", part3, show3);
document.getElementById("toggle3").textContent = show3 ? "Hide answers" : "Reveal answers";
};

document.querySelectorAll(".tab").forEach((btn) => {
btn.addEventListener("click", () => {
document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
btn.classList.add("active");
document.getElementById(btn.dataset.tab).classList.add("active");
});
});
};
