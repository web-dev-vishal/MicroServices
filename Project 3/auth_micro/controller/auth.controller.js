class AuthContoller {
    static async register(req, res) {
        const payload = req.body;

        return res.json(payload);
    }
}

export default AuthContoller;