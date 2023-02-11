import React, {Component} from "react";
import {GoSell} from "@tap-payments/gosell";
import * as api from "../api/index";

class GoSellDemo extends Component {
  constructor(props) {
    super(props);
  }
  state = {amount: 0};
  makeRequest = async response => {
    const oreders = this.props.cartProducts.map(p => ({
      idUser: this.props.user?.id,
      Username: response.card.name,
      nameProduct: p.name,
      idProduct: p._id,
      sizeProduct: p.standard.size,
      lengthProduct: p.standard.length,
      designProduct: p.standard.design,
      price: p.price,
      address: {
        city: response.card.address_city,
        country: response.card.address_country,
        line1: response.card.address_line1,
        state: response.card.address_state,
        zip: response.card.address_zip,
      },
    }));

    try {
      oreders.forEach(async order => {
        const res = await api.createOrder(order);
        console.log("order", res.data);
      });
      const response = await api.emptyCart();
      this.props.setCartProducts([]);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const amountItemsInCart = this.props.cartProducts?.reduce(
      (total, item) => total + item.price,
      0
    );
    this.setState({amount: amountItemsInCart});
  }

  callbackFunc(response) {
    console.log(response);
    console.log(this.props.amount);
    this.makeRequest(response);
  }

  render() {
    return (
      <div className="App">
        <button
          className="py-2 px-12 bg-black text-white font-semibold w-full text-center rounded"
          onClick={() => GoSell.openLightBox()}
        >
          الدفع
        </button>

        <GoSell
          gateway={{
            publicKey: "pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
            language: "en",
            contactInfo: true,
            supportedCurrencies: "all",
            supportedPaymentMethods: "all",
            saveCardOption: true,
            customerCards: true,
            notifications: "standard",
            backgroundImg: {
              url: "imgURL",
              opacity: "0.5",
            },
            callback: this.callbackFunc,
            labels: {
              cardNumber: "Card Number",
              expirationDate: "MM/YY",
              cvv: "CVV",
              cardHolder: "Name on Card",
              actionButton: "Pay",
            },
            style: {
              base: {
                color: "#535353",
                lineHeight: "18px",
                fontFamily: "sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "rgba(0, 0, 0, 0.26)",
                  fontSize: "15px",
                },
              },
              invalid: {
                color: "red",
                iconColor: "#fa755a ",
              },
            },
          }}
          customer={{
            first_name: this.props.user.firstName,
            last_name: this.props.user.lastName,
            email: this.props.user.email,
            phone: {
              country_code: "965",
              number: this.props.user.mobileNumber,
            },
          }}
          order={{
            amount: this.state.amount,
            currency: "KWD",
            items: this.props.cartProducts,
            shipping: null,
            taxes: null,
          }}
          transaction={{
            mode: "charge",
            charge: {
              saveCard: false,
              threeDSecure: true,
              description: "Test Description",
              statement_descriptor: "Sample",
              reference: {
                transaction: "txn_0001",
                order: this.props.user.id,
              },
              metadata: {},
              receipt: {
                email: false,
                sms: true,
              },
              redirect: "/",
              post: null,
            },
          }}
        />
      </div>
    );
  }
}

export default GoSellDemo;
