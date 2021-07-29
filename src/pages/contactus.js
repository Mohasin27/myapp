import React from 'react';
import usePowerform from "powerform-react";


function Contactus() {
    function required(value) {
        if (!value) {
            return "This field is required.";
        }
    }

    const schema = {
        fristname: required,
        lastname: required,
        email: [required, isEmail],
        jobtitle: required,
        companyname: required,
        additionalinformation: required,
    };
    function submit(form) {
        return e => {
            e.preventDefault();
            form.validate();
        };
    }
    function isEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return 'Please enter valid Email.';
        }
    }

    const form = usePowerform(schema);
    return (
        <div className="container">
            <div className="contact-heading">
                <h1>Contact Us</h1>
            </div>
            <div className="contactForm">

                <div class="form-group row">
                    <label for="Frist Name" className="col-md-4"><span className="error">*</span> Frist Name</label>
                    <div className="col-md-8">
                        <input onInput={e => form.fristname.setData(e.target.value)} onChange={() => form.fristname.validate()} class="form-control" />
                        <div className="error">{form.fristname.getError()}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Last Name" className="col-md-4"><span className="error">*</span> Last Name</label>
                    <div className="col-md-8">
                        <input onInput={e => form.lastname.setData(e.target.value)} onChange={() => form.lastname.validate()} class="form-control" />
                        <div className="error">{form.lastname.getError()}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Last Name" className="col-md-4"><span className="error">*</span> Email</label>
                    <div className="col-md-8">
                        <input type="email" onInput={e => form.email.setData(e.target.value)} onChange={() => form.email.validate()} class="form-control email" />
                        <div className="error">{form.email.getError()}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Job Title" className="col-md-4"><span className="error">*</span> Job Title</label>
                    <div className="col-md-8">
                        <input onInput={e => form.jobtitle.setData(e.target.value)} onChange={() => form.jobtitle.validate()} class="form-control" />
                        <div className="error">{form.jobtitle.getError()}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Job Title" className="col-md-4"><span className="error">*</span> Company Name</label>
                    <div className="col-md-8">
                        <input onInput={e => form.companyname.setData(e.target.value)} onChange={() => form.companyname.validate()} class="form-control" />
                        <div className="error">{form.companyname.getError()}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="Job Title" className="col-md-4">Additional Information</label>
                    <div className="col-md-8">
                        <textarea onInput={e => form.additionalinformation.setData(e.target.value)} onChange={() => form.additionalinformation.validate()} class="form-control"></textarea>
                        <div className="error">{form.additionalinformation.getError()}</div>
                    </div>
                </div>
                <div class="text-right">
                    <button className="btn btn-primary" onClick={submit(form)}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contactus;