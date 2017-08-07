        var displayPage;

        function myFunction() {
            displayPage = setTimeout(showPage, 1200);
        }

        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("greeting").style.display = "none";
          document.getElementById("mypage").style.display = "block";
        }
