const enrollStudent = document.querySelector("#enrollStudent");
const clear = document.querySelector("#clear");
const fullName = document.querySelector("#fn");
const email = document.querySelector("#em");
const website = document.querySelector("#wb");
const imageLink = document.querySelector("#il");
const male = document.querySelector("#m");
const female = document.querySelector("#f");
const insert = document.querySelector("#insertHere");
console.log(insert);

enrollStudent.addEventListener("click", () => {
  if (
    !fullName.value ||
    !email.value ||
    !website.value ||
    !imageLink.value ||
    (!male.checked && !female.checked)
  )
    alert("please enter all fields");
  else {
    const gender = male.checked ? "Male" : "Female";
    insert.insertAdjacentHTML(
      "afterbegin",
      `<div class="card mx-5 mt-3 mb-3" style="max-width: 540px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${imageLink.value}" class="img-fluid rounded-start" alt="error" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">${fullName.value}</p>
                                <p class="card-text">${email.value}</p>
                                <p class="card-text">${website.value}</p>
                                <p class="card-text">${gender}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    );
    console.log(fullName.value, email.value, website.value, imageLink.value);
  }
});

clear.addEventListener("click", () => {
  fullName.value = null;
  email.value = null;
  website.value = null;
  imageLink.value = null;
  male.checked = false;
  female.checked = false;
});

//Female-http://assets.stickpng.com/images/585e4bc4cb11b227491c3395.png
//Male-https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg
