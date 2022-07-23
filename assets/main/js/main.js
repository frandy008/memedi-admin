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

function edit_data(nama, sosmed) {
  $('form[name="edit"] input[name="nama"]').val(nama);
  $('form[name="edit"] input[name="sosmed"]').val(sosmed);
}
