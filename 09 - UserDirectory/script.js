class UserDirectory {
  constructor(options) {
    const {
      apiUrl,
      userMapperFn,
      displaySelector,
      filterSelector,
      storageKey = "userData",
    } = options;
    this.apiUrl = apiUrl;
    this.storageKey = storageKey;
    this.userMapperFn = userMapperFn;
    this.displaySelectorElement = document.querySelector(displaySelector);
    this.filterSelector = document.querySelector(filterSelector);
  }

  loadData() {
    return fetch(this.apiUrl)
      .then((response) => response.json())
      .then((results) => this.userMapperFn(results))
      .then((users) => {
        this.users = users;
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        return users;
      });
  }
}

const userDirectory = new UserDirectory({
  apiUrl: "https://dummyjson.com/users",
  userMapperFn: () => {},
  displaySelector: "#userTable",
  filterSelector: "filterUsers",
});

console.log(userDirectory);
