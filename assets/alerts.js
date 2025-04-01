let imageContainer = document.getElementById("image-container");
let ImageText = "";

for (const review of image) {
  ImageText += `<a href="javascript:void(0);" id="${review.id}" target="_blank"
  class="w-full transition duration-300 aspect-video hover:rotate-3">
  <img src="${review.image}" alt=""
      class="object-cover object-center w-full border-8 border-white shadow-lg aspect-video">
</a>`;
}

imageContainer.innerHTML = ImageText;

image.map((review) => {
  document.getElementById(review.id).addEventListener("click", function (e) {
    e.preventDefault();

    // silakan ubah sesuai keinginan ui desain kamu
    Swal.fire({
      title: review.title,
      html: `<div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
              <span>${review.content}</span>
          </div>
          <div class="flex flex-row items-center gap-2">
              <span class="text-sm items-center">Dibuat oleh ${review.owner}</span>
              <div class="flex flex-row items-center gap-1">
              </div>
          </div>
      </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Tutup",
      confirmButtonColor: "#3b82f6",
      showClass: {
        popup: "come-from-behind",
      },
      hideClass: {
        popup: "go-to-front",
      },
      didOpen: () => {
        // Menambahkan efek tambahan saat alert terbuka
        document.querySelector(".swal2-popup").style.transformStyle =
          "preserve-3d";
      },
    });
  });
});
