class Github{
  constructor(){
    this.client_id ='d587162e7e9e23cdc3b1';
    this.client_secret = 'acbdbe8841d1b9cfec4d6f2c9d5c43778975d4bd';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }
}