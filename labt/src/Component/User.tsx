interface User {
    name: String;
    username: String;
    nickname: String;
    email: String;
    phone: String;
}
interface ExtendUser extends User{
    age: number;
    sex: String;
}
export default ExtendUser;