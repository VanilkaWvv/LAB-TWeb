import './App.css';
import './App.ts';
const privateUser: ExtendUser = {
    name: 'Oleja',
    username: 'Oleja',
    nickname: 'cucumber',
    email: 'olejacucumber@gmail.com',
    phone: '068928502',
    age: 19,
    sex: 'Male'
};
console.log(privateUser);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 class="line">
            Private User Information
        </h2>
            <p class="paragraph">
                Name: {privateUser.name}
            </p>
            <p class="paragraph">
                Username: {privateUser.username}
            </p>
            <p class="paragraph">
                Nickname: {privateUser.nickname}
            </p>
            <p class="paragraph">
                Email: {privateUser.email}
            </p>
            <p class="paragraph">
                Phone: {privateUser.phone}
            </p>
            <p class="paragraph">
                Age: {privateUser.age}
            </p>
            <p class="paragraph">
                Sex: {privateUser.sex}
            </p>
      </header>
    </div>
  );
}

export default App;
