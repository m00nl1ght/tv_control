import React from 'react';

export default function Header() {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <img className="mr-5" src="/img/claas-logo-right.jpg" alt="Логотип компании"/>

            <h1 className="my-0 mr-md-auto">Главная</h1>
{/* 
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="/">КПП 1</a>
                <a className="p-2 text-dark" href="http://10.44.88.111/act/act_form">Акт-допуск</a>
            </nav> */}

            <a className="btn btn-outline-primary" href="/login">Войти</a>
        </header>
    )
}

