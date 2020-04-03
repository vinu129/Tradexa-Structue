$(document).ready(function () {

    var tableHeader = $("#fixed-table-header").overlayScrollbars({
        overflowBehavior: {
            x: 'hidden',
            y: 'hidden'
        }
    }).overlayScrollbars();

    var tableBody = $("#custom-table-body").overlayScrollbars({
        overflowBehavior: {
            x: 'hidden',
            y: 'hidden'
        }
    }).overlayScrollbars();

    var fixedTableBody = $("#fixed-column-body").overlayScrollbars({ }).overlayScrollbars();

    $("#custom-table-body").overlayScrollbars({
        callbacks: {
            onScroll: function (scrollPosition) {
                tableHeader.scrollStop().scroll({
                    x: scrollPosition.target.scrollLeft,
                })
                fixedTableBody.scroll({
                    y:scrollPosition.target.scrollTop,
               
                })
                // Split Table Body Left
        if (tableBody !== undefined) {
            tableBody.scrollStop().scroll({
              y: scrollInfo.target.scrollTop
            })
          }
          // Split Table Body Right
          if (fixedTableBody !== undefined) {
            fixedTableBody.scrollStop().scroll({
              y: scrollInfo.target.scrollTop
            })
          }
            }
        }
    })
    $("#fixed-column-body").overlayScrollbars({
        callbacks: {
            onScroll: function (scrollPosition) {
                tableBody.scroll({
                    y: scrollPosition.target.scrollTop,
                })
            }
        }
    });
    $("#nav").overlayScrollbars({
        
    });
    $("#mainContentBody").overlayScrollbars({ });
    var fixedRowHeight = document.getElementById("fixed-column-body").querySelectorAll('tr');
    var customRowHeight = document.getElementById("custom-table-body").querySelectorAll('tr');

    for (var i = 0; i < fixedRowHeight.length; i++) {
        const height = Math.max(fixedRowHeight[i].clientHeight, customRowHeight[i].clientHeight);
        customRowHeight[i].style.height = height + "px";
    }
    // First we detect the click event
    var a = document.getElementById("nav").querySelectorAll(".nav-item");
    console.log(a);
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                console.log("added");
            } else {

                this.classList.add('active');
                console.log("not-added");
            }
        });
    }


});