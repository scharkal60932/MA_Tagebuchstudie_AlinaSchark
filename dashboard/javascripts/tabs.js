let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');
  let tabsContent = document.querySelectorAll('.tab-content');

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
})();

function openDemographics() {
  removeActive();
  hideAll();
  $("#demo-tab").addClass("is-active");
  $("#demo-tab-content").removeClass("is-hidden");
}

function openTask1() {
  removeActive();
  hideAll();
  $("#task1-tab").addClass("is-active");
  $("#task1-tab-content").removeClass("is-hidden");
}

function openTask2() {
  removeActive();
  hideAll();
  $("#task2-tab").addClass("is-active");
  $("#task2-tab-content").removeClass("is-hidden");
}

function openTask3() {
  removeActive();
  hideAll();
  $("#task3-tab").addClass("is-active");
  $("#task3-tab-content").removeClass("is-hidden");
}

function openTask4() {
  removeActive();
  hideAll();
  $("#task4-tab").addClass("is-active");
  $("#task4-tab-content").removeClass("is-hidden");
}

function removeActive() {
  $("li").each(function () {
    $(this).removeClass("is-active");
  });
}

function hideAll() {
  $("#demo-tab-content").addClass("is-hidden");
  $("#task1-tab-content").addClass("is-hidden");
  $("#task2-tab-content").addClass("is-hidden");
  $("#task3-tab-content").addClass("is-hidden");
  $("#task4-tab-content").addClass("is-hidden");
}