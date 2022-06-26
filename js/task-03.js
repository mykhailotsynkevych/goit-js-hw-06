const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEL = document.querySelector(".gallery");
galleryEL.style.backgroundColor = "teal";
galleryEL.style.listStyle = "none";
galleryEL.style.justifyContent = "space-evenly";
galleryEL.style.alignItems = "center";
galleryEL.style.padding = "30px";

const makeGalleryCard = ({ url, alt } = {}) => {
  return `<li class="gallery-item">
            <a href="#">
              <img src=${url} alt=${alt} width = 420>
            </a>
          </li>`;
};

const galleryMarkup = images
  .map((el) => {
    return makeGalleryCard(el);
  })
  .join("");



galleryEL.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryEL);
