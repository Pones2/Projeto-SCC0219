import React, {useEffect, useState} from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import UserDisplay from "../../Components/UserDisplay/UserDisplay";

import "./Users.css";
import userEvent from "@testing-library/user-event";

const Users = ({GlobalState}) => {
    const {login, loggedUser,setLogin} = GlobalState;
    const [searchedUser, setSearchedUser] = React.useState("");
    const [userList, setUserList] = useState([]); // filtered list of users to be displayed

    const deleteUser = async (userEmail) => {
        // console.log(userEmail)
        let resultDeleteUser = await fetch(
            `http://localhost:5000/deleteUser?email=${encodeURIComponent(userEmail)}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",}
        })
        
        // console.log({"First : " : resultDeleteUser})
        resultDeleteUser = await resultDeleteUser.json();
        // console.log({"Second : " : resultDeleteUser})
        alert(resultDeleteUser.message);
        
        if(loggedUser.email == userEmail){
            setLogin("unlogged");
        }

        setSearchedUser(userEmail);
        setUserList(userEmail);
        
        localStorage.setItem("deleteUser: " + userEmail, userEmail);
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            console.log({"pesquisa " : searchedUser})
            let quantity = 10
            if (searchedUser != undefined && searchedUser != null && searchedUser && "")
            quantity = 20


            let result = await fetch(
              `http://localhost:5000/getUsers?name=${encodeURIComponent(searchedUser)}&quantity=${quantity}}`, {
              method: "get",
              headers: {
                  "Content-Type": "application/json",
              }
            }).then(response => response.json()
            ).then((data) => {
                console.log(data);

                let filteredUsers = data;

                if (searchedUser) {
                    filteredUsers = filteredUsers.filter((user) =>
                        user.name.toLowerCase().includes(searchedUser.toLowerCase())
                    );
                }

                const filteredUsersList = filteredUsers.map((user) => (<div class="userDisplay">
                    <UserDisplay
                        name={user.name}
                        email={user.email}
                        address={user.address}
                        phone={user.phone}
                        onClick={() => deleteUser(user.email)}
                    ></UserDisplay>
                    </div>
            ));

                setUserList(filteredUsersList);
            }).catch((error) => {
                window.alert("ERROR: Failed to fetch the user list. Error = " + error);
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [searchedUser]);

    const handleSearchedUserChange = (event) => {
        setSearchedUser(event.target.value);
    };

    if(login !== "admin") {
        return (
            <>
                <Header />
                    <div id="acessDenied">
                        <p> Você não tem permissão para acessar esta página! </p>
                    </div>
                <Footer />
            </>
        );
    }
    else
    return (
        <>
            <Header />
                <input type="text" id="searchUser" placeholder="Digite o nome do usuário" value={searchedUser} onChange={handleSearchedUserChange} className="nameInput"/>
                {userList}
            <Footer />
        </>
    );
};

export default Users;
