// @ts-nocheck
// replace the value of the element
async function tryReplace(element: any, starting: number, ending: number) {
  // ending char is exluded
  var variableName = element.value.substring(starting + 1, ending);
  let value: boolean = false; //if value is changed
  chrome.storage.sync.get(variableName, function (result) {
    let keyValuearray = Object.entries(result);
    let key_value = keyValuearray[0];
    // if the variableName key is present in storage
    if (key_value != undefined) {
      element.value =
        element.value.substring(0, starting) +
        key_value[1] +
        element.value.substring(ending + 1, element.value.length);
      // remove the period after replacing
      if (element.value[element.value.length - 1] === ".") {
        element.value = element.value.substring(0, element.value.length - 1);
      }
    } else {
      value = false;
    }
  });
  return value;
}

// function triggered with "."
async function tryParse(element: any) {
  var i = 0;
  var ifReplaced;
  while (i < element.value.length) {
    if (element.value[i] == "<") {
      let j = i + 1;
      // all the values inside the input enclosed with arrows will be replaced
      while (j < element.value.length && element.value[j] != ">") {
        j += 1;
      }
      if (j != element.value.length) {
        ifReplaced = await tryReplace(element, i, j);
      }
    }
    i += 1;
  }
}

const addListenerToType = (type: string) => {
  var elements = document.querySelectorAll(type);
  for (let x = 0; x < elements.length; x++) {
    let element = elements[x];
    try {
      // Unlike the keypress event, the keydown event is fired for all keys when a key is pressed.,
      // regardless of whether they produce a character value.
      element.addEventListener("keydown", function (event: any) {
        if (event.key == ".") {
          tryParse(element);
        }
      });
    } catch {}
  }
};

function addListenersToTypes(types: string[]) {
  types.forEach((type) => addListenerToType(type));
}

function onInterval(types: string[], lengths: number[]) {
  var new_lengths = types.map((type) => document.querySelectorAll(type).length);
  // whenever node elements get updated
  for (let x = 0; x < new_lengths.length; x++) {
    if (new_lengths[x] != lengths[x]) {
      lengths[x] = new_lengths[x];
      addListenerToType(types[x]);
    }
  }
}

function showBox() {
  var results = document.getElementsByClassName("kvH3mc BToiNc UK95Uc");

  for (let i = 0; i < results.length; i++) {
    var body = results[i];
    var appended = document.createElement("div");

    appended.innerHTML = `
      <style> 
      .box{
        display: flex;
        justify-content: space-between;

      }

      .logo{
        width: 24px;
        height: 24px;
      }

      </style>
        <div class="box"> 
          <div class="left">
            <img class="logo" src="./assets/logonew.png" alt="logo">
            <span> Ditch the seo </span>
          </div>
          <div class="right">
          <span class="likes"> 225 people </span>
          <span class = "comments"> comments </span>
          </div>
        </div>
      `;

    body.append(appended);
  }
}

window.onload = function () {
  const types = ["input", "textarea"];
  const lengths = types.map((type) => document.querySelectorAll(type).length);
  addListenersToTypes(types);
  showBox();
  // continues calling the function until clearInterval() is called, or the window is closed.
  setInterval(() => onInterval(types, lengths), 5000);
};
