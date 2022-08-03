function logout() {
  Swal.fire({
    title: "Yakin logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Kamu berhasil logout", "success").then(
        () => (window.location.href = "login.html")
      );
    }
  });
}

function hapus(nama) {
  Swal.fire({
    title: "Yakin hapus data " + nama + "?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Data berhasil di hapus !", "success");
    }
  });
}

function hapus_produk() {
  Swal.fire({
    title: "Yakin hapus data produk ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Data berhasil di hapus !", "success");
    }
  });
}

$(".btn-delete").on("click", function () {
  hapus_produk();
});

function edit_data(nama, sosmed) {
  $('form[name="edit"] input[name="nama"]').val(nama);
  $('form[name="edit"] input[name="sosmed"]').val(sosmed);
}

$(".nav-menu").on("click", function () {
  sessionStorage.setItem("arr_menu", $(this).data("id"));
});

function get_active() {
  let menu = sessionStorage.getItem("arr_menu");
  if (menu == null) {
    return document.querySelectorAll(".nav-menu")[0].classList.add("active");
  }
  let list_menu = $(".nav-menu");
  $(".nav-menu").removeClass("active");
  for (let i = 0; i < list_menu.length; i++) {
    if (document.querySelectorAll(".nav-menu")[i].dataset.id == menu) {
      document.querySelectorAll(".nav-menu")[i].classList.add("active");
    }
  }
}

get_active();
