firstName = document.getElementById("firstName");
secondName = document.getElementById("secondName");
emailAddress = document.getElementById("emailAddress");
password = document.getElementById("password");
fnspan = document.getElementById("fnspan");
lnspan = document.getElementById("lnspan");
espan = document.getElementById("espan");
pspan = document.getElementById("pspan");
formid = document.getElementById("formid");

formvalues = {
  firstname: "",
  lastname: "",
  password: "",
  emailAddress: "",
};

firstName.addEventListener("input", (e) => {
  value = e.target.value;
  formvalues.firstname = value;
  if (formvalues.firstname) {
    fnspan.style.display = "none";
  }
});
secondName.addEventListener("input", (e) => {
    value = e.target.value;
    formvalues.lastname = value;
    if (formvalues.lastname) {
        lnspan.style.display = "none";
    }
  });
  emailAddress.addEventListener("input", (e) => {
    value = e.target.value;
    formvalues.emailAddress = value;
    if (formvalues.emailAddress) {
        espan.style.display = "none";
    }
  });
  password.addEventListener("input", (e) => {
    value = e.target.value;
    formvalues.password = value;
    if (formvalues.password) {
      pspan.style.display = "none";
    }
  });

formid.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formvalues.firstname) {
    fnspan.style.display = "inline";
  }
  if (!formvalues.lastname) {
    lnspan.style.display = "inline";
  }
  if (!formvalues.password) {
    pspan.style.display = "inline";
  }
  if (!formvalues.emailAddress) {
    espan.style.display = "inline";
  }
});
