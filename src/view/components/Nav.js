import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alterMainPage } from '../actions';
import NavItens from './NavItens';
import PageTest from './PageTest';
import Home from './Main/Home';
import Comodo from './Main/Comodo';

export class Nav extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: "Usuário teste"
        };

        this.mobileMenuClick = this.mobileMenuClick.bind(this)
    }

    componentDidMount() {
        let that = this;
        that.ajust();

        $("#slide-out li").click(function () {
            that.ajust();
        });

        $(window).resize(function () {
            that.ajustLastItem();
        });
    }

    ajust() {
        let aj = setInterval(this.ajustLastItem, 0);
        setTimeout(function () { clearInterval(aj); }, 500);
    }

    ajustLastItem() {
        let last = $("#slide-out li").last();
        if (!last.get(0)) return;

        let margin = $(window).height() - last.position().top - last.children().outerHeight(true) + ((last.children().outerHeight(true) - last.children().outerHeight()) / 2);
        if (margin >= 0) last.css("margin-top", margin);
    }

    mobileMenuClick() {
        this.ajust()
    }

    render() {

        const { alterMainPage } = this.props;

        return (
            <header>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="center principalcolor">
                            <div><a onClick={() => alterMainPage(< Home />)} href="#!"> <i className="material-icons principalcolor" style={styles.gearIcon}>settings_applications</i></a></div>
                            <div>{this.props.title}</div>
                            <div id="d_ip">{this.props.host}</div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <div className="center principalcolor">
                            <div id="d_name_connected">Conectado como: {this.state.userName}</div>
                            <div>
                                <a id="signOut" className="waves-effect btn-small principalBackgroundColor"><i className="material-icons left">details</i> signOut </a>
                            </div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <NavItens
                        name='Cômodos'
                        itens={[{
                            name: 'Quarto Nathan',
                            toPage: <Comodo />
                        }]}
                    />
                    <NavItens
                        name='Configurações'
                        toPage={<PageTest />}
                    />
                    <li>
                        <a id="b_lateral" className="waves-effect btn principalBackgroundColor">
                            Aplicar Configurações </a>
                    </li>
                </ul>

                <nav className="top-nav" style={styles.nav}>
                    <div className="container" style={styles.topNavContainer}>
                        <div className="nav-wrapper principalcolor">
                            <a onClick={this.mobileMenuClick} href="#" data-target="slide-out" className="top-nav sidenav-trigger principalcolor" style={styles.mobileMenu}><i className="material-icons" style={{ fontSize: '35px' }}>menu</i></a>
                            <h3 className="center" id="titleNav"> Room Control </h3>
                        </div>
                    </div>
                </nav>

                <div className="fixed-action-btn">
                    <a id="b_flutuante" className="btn-floating btn-large waves-effect tooltipped principalBackgroundColor" data-position="left" data-tooltip="Aplicar Configurações">
                        <i className="large material-icons">check</i>
                    </a>
                </div>
            </header>
        );
    }
}

const styles = {
    gearIcon: {
        fontSize: '150px',
        marginTop: '40px'
    },
    nav: {
        height: '70px',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.14)',
        backgroundColor: 'transparent'
    },
    topNavContainer: {
        width: '100%'
    },
    mobileMenu: {
        position: 'absolute',
        textAlign: 'center',
        height: '60px',
        width: '60px',
        top: '-5px',
        left: '-25px',
        zIndex: '2'
    }
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ alterMainPage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);