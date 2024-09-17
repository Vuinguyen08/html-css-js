/*user input value */
const userInputValue = document.getElementById("result");
//boolean check khi bấm vào + - * chia
let isNext = false;
//Lưu giá trị trước
let previousValue = 0;
//Lưu operation (+ - * / )
let operation = "";

let lastResult = 0;

/*get operation key*/
const operations = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      const value = e.target.innerHTML;
      if (value === "AC") {
        userInputValue.innerText = 0;
        userInputValue.classList.remove("over-size");
        resetDefaultValue();
        return;
      }

      if (value === "DEL") {
        userInputValue.innerText = userInputValue.innerText.slice(0, -1) || 0;
        userInputValue.classList.remove("over-size");
        return;
      }

      if (value === "%") {
        if (userInputValue.innerText === "0") return;
        userInputValue.innerText = userInputValue.innerText / 100;
        return;
      }

      if (value !== "=") {
        operation = value;
        previousValue = userInputValue.innerText;
        isNext = true;
        return;
      }

      if (value === "=") {
        if (lastResult === 0) {
          lastResult = userInputValue.innerText;
        }
        userInputValue.innerText = eval(
          `${previousValue}${operation}${userInputValue.innerText}`
        );
        previousValue = lastResult;
      }
    });
  });

/*get number button value*/
const number = document.querySelectorAll(".numbers").forEach(function (item) {
  //gắn sự kiện click button cho từng item button
  item.addEventListener("click", function (event) {
    const value = event.target.innerHTML;
    // Xử lý chỉ cho phép tối đa 11 kí tự
    if (userInputValue.innerText.length >= 11) {
      return;
    }

    //Xử lý sau khi nhấn vào các button cộng trừ nhân chia
    if (isNext) {
      userInputValue.innerText = value;
      isNext = false;
      return;
    }

    //Xử lý chỉ cho phép hiển thị 1 dấu chấm
    if (userInputValue.innerText.includes(".") && value === ".") {
      return;
    }

    //Reset value input, xóa số 0 ở đầu khi nhấn lần đầu.
    if (userInputValue.innerText === "0" && value !== ".") {
      userInputValue.innerText = value;
      return;
    }

    //Xử lý cộng chuỗi khi nhấn liên tiếp các số
    userInputValue.innerText += value;

    //Thêm Css vào cho các button + - * chia khi đạt đến 11 kí tự.
    if (userInputValue.innerText.length === 11) {
      userInputValue.classList.add("over-size");
    } else {
      userInputValue.classList.remove("over-size");
    }
  });
});

const resetDefaultValue = () => {
  isNext = false;
  previousValue = 0;
  operation = "";
  lastResult = 0;
};
