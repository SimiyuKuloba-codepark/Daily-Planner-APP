class gitHub {
  constructor(){
    this.client_id = '7d4e7c109bf689ad0303';
    this.client_secret = 'c302c38f1d3285cefc4b2a3cb589c706b8343c44';
  }

  async getUser(user){
    const profileResponse = await fetch
    (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile
    }
  }

}




