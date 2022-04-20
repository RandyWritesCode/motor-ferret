import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Feed from '../Components/Feed/Feed';
import Footer from '../Components/Footer/Footer';
import LocationForm from '../Components/Forms/LocationForm';
import TitleForm from '../Components/Forms/TitleForm';
import Header from '../Components/Header/Header';
import LandingPage from '../Components/LandingPage/LandingPage';
import Login from '../Components/Login/Login';
import Nav from '../Components/Nav/Nav';
import SearchEvents from '../Components/SearchEvents/SearchEvents';
import SearchEventsForm from '../Components/SearchEventsForm/SearchEventsForm';
import EventForm from '../Components/Forms/EventForm';
import SignUp from '../Components/SignUp/SignUp';
import Users from '../Components/Users/Users';

describe('Components', () => {
    it('FEED renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Feed />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('FOOTER renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('EventForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EventForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('LocationForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LocationForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('TitleForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TitleForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Header renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('LandingPage renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Login renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('SearchEvents renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchEvents />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('SearchEventsForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchEventsForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('SignUp renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Users renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Users />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
