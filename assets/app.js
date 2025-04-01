let reviewContainer = document.getElementById("review-container");
let reviewText = "";
for (const review of reviews) {
  reviewText += `<a href="#" class="flex flex-col gap-4 p-4 card">
    <div class="flex flex-row items-center gap-4">
        <img src="${review.image}" alt="${review.name}" class="w-10 h-10 rounded-full">
        <div class="flex flex-col gap-1">
            <span class="font-semibold text-slate-800">${review.name}</span>
            <span>${review.job}</span>
        </div>
    </div>
    <div>
        <span>${review.comment}</span>
    </div>
</a>`;
}

reviewContainer.innerHTML = reviewText;
