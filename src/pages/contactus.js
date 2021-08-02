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
        <div className="inner-container">
            <div className="page_section_heading">
                <div className="page-head ">
                    <h1>Contact Us</h1>
                    <p>Follow your passion, and success will follow you</p>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="contact-form col-12 col-md-6">
                        <h3>DROP US A LINE</h3>
                        <div class="form-group">
                            <label for="Frist Name"><span className="error">*</span> Frist Name</label>
                            <div>
                                <input onInput={e => form.fristname.setData(e.target.value)} onChange={() => form.fristname.validate()} class="form-control" />
                                <div className="error">{form.fristname.getError()}</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Last Name"><span className="error">*</span> Last Name</label>
                            <div>
                                <input onInput={e => form.lastname.setData(e.target.value)} onChange={() => form.lastname.validate()} class="form-control" />
                                <div className="error">{form.lastname.getError()}</div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="Last Name"><span className="error">*</span> Email</label>
                            <div>
                                <input type="email" onInput={e => form.email.setData(e.target.value)} onChange={() => form.email.validate()} class="form-control email" />
                                <div className="error">{form.email.getError()}</div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="Job Title"><span className="error">*</span> Job Title</label>
                            <div>
                                <input onInput={e => form.jobtitle.setData(e.target.value)} onChange={() => form.jobtitle.validate()} class="form-control" />
                                <div className="error">{form.jobtitle.getError()}</div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="Job Title"><span className="error">*</span> Company Name</label>
                            <div>
                                <input onInput={e => form.companyname.setData(e.target.value)} onChange={() => form.companyname.validate()} class="form-control" />
                                <div className="error">{form.companyname.getError()}</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Job Title">Additional Information</label>
                            <div>
                                <textarea onInput={e => form.additionalinformation.setData(e.target.value)} onChange={() => form.additionalinformation.validate()} class="form-control"></textarea>
                                <div className="error">{form.additionalinformation.getError()}</div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button className="btn btn-primary" onClick={submit(form)}>Send</button>
                        </div>
                    </div>
                    <div className="contact-content col-12 col-md-6">
                        <h3>CONTACT INFORMATION</h3>
                        <p>
                            We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.
                        </p>
                        <p className="mb-5">
                            184 Main Rd E, St Albans Victoria 3021, Australia
                        </p>
                        <p className="mb-5">
                            1800-123-222 / 1900-1570-230
                        </p>
                        <p className="mb-5">
                            contact@hitachi.com
                        </p>
                        <p className="mb-5">
                            Everyday 9:00-17:00

                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contactus;