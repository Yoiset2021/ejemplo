import React, { Component } from 'react';
import Navigation from '../navigation'
import Footer from '../footer'

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="container">
                <div className="row">
                    <header className="col-12">
                        <Navigation/>
                    </header>
                    <main className="col-12">
                        { children }
                    </main>
                    <footer className="col-12">
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}