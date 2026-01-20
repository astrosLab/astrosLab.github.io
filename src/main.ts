import "./style.css";

const title = document.querySelector<HTMLHeadingElement>("#title")!;
const content = document.querySelector<HTMLDivElement>("#content")!;
const fullText = "Astro's Lab";

let currentText = "";
let index = 0;

const typeNext = () => {
  if (index < fullText.length) {
    currentText += fullText[index];
    title.textContent = currentText;
    index++;
    setTimeout(typeNext, 100);
  } else {
    content.style.transition = "opacity 1s ease-in";
    content.style.opacity = "1";
  }
};

title.classList.remove("hidden");
typeNext();

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("project").forEach((el) => {
    const image = el.getAttribute("image");
    const title = el.getAttribute("title");
    const description = el.getAttribute("description");
    const link = el.getAttribute("link");

    const container = document.createElement("div");
    container.className = "project";

    const thumbnail = document.createElement("img");
    thumbnail.src = image!;
    thumbnail.className = "thumbnail";

    const infobox = document.createElement("div");
	infobox.className = "infobox";

	const titlebox = document.createElement("div");
	titlebox.className = "titlebox";

    const infotitle = document.createElement("h3");
    infotitle.innerText = title!;

	if (link) {
		const link = el.getAttribute("link");

		const anchor = document.createElement("a");
		anchor.href = link!;
		anchor.target = "_blank";

		const img = document.createElement("img");
		img.src = "/icons/github.svg";
		img.className = "iconlink";
		img.style.transform = "translateY(8px)";

		anchor.appendChild(img);
    	titlebox.appendChild(anchor);
	}
 
	const infotext = document.createElement("p");
    infotext.innerText = description!;

    titlebox.appendChild(infotitle);

    infobox.appendChild(titlebox);
    infobox.appendChild(infotext);

    container.appendChild(infobox);
    container.appendChild(thumbnail);

    el.replaceWith(container);
  });


  // simpleicons.org
  document.querySelectorAll("icon-link").forEach((el) => {
    const icon = el.getAttribute("icon");
    const link = el.getAttribute("link");

    const anchor = document.createElement("a");
    anchor.href = link!;
    anchor.target = "_blank";

    const img = document.createElement("img");
    img.src = icon!;
    img.className = "iconlink";

    anchor.appendChild(img);

    if (icon && link) {
      el.replaceWith(anchor);
    }
  });
});
