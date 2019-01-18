class Github {
    constructor() {
        this.client_id = 'd22c5493d3f7f31e371c';
        this.client_secret = '73ebae65d492d18c6d3815fa5a74b4d6ca153587';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}