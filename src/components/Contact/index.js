import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Container, Grid, makeStyles } from "@material-ui/core";
import {
  ScreenContainer,
  FormContent,
  FormWrap,
  Icon,
} from "./ContactElements";
import Textfield from "../Form/Textfield";
import Select from "../Form/Select";
import FormButton from "../Form/FormButton";
import FormContainer from "../Form/FormContainer";
import FormWrapper from "../Form/FormWrapper";
import purposeData from "../../assets/data/PurposeData.json";
import countryCode from "../../assets/data/CountryCode.json";
import occupationData from "../../assets/data/OccupationData.json";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  fieldWrapper: {
    marginBottom: "20px",
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  phone: "",
  occupation: "",
  purpose: "",
  company: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required."),
  lastName: Yup.string().required("Required."),
  email: Yup.string().email("Invalid Email.").required("Required."),
  countryCode: Yup.string().required("Required."),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone Number Is Not Valid."
    )
    .typeError("Please enter a valid phone number.")
    .required("Required."),
  occupation: Yup.string().required("Required."),
  purpose: Yup.string().required("Required."),
  company: Yup.string(),
  message: Yup.string(),
});

const ContactSection = () => {
  const classes = useStyles();
  // window width
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const contactHandler = async (values) => {
    console.log(values);
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const contactData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: `+${values.countryCode}${values.phone}`,
      occupation: values.occupation,
      companyName: values.company,
      purpose: values.purpose,
      message: values.message,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_URI}/api/contact`,
        contactData,
        config
      );

      const emailData = {
        from_name: `${values.firstName} ${values.lastName}`,
        phoneNumber: `+${values.countryCode}${values.phone}`,
        occupation: values.occupation,
        purpose: values.purpose,
        message: values.message,
      };

      console.log(emailData);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          emailData,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Thanks for getting in touch!");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  return (
    <ScreenContainer>
      <FormWrap>
        <Icon to="/">Jay Jhangiani</Icon>
        <FormContent>
          <FormContainer reduceMargin={true}>
            <FormWrapper>
              <Grid container>
                <Grid item xs={12}>
                  <Container maxWidth="md">
                    <div className={classes.formWrapper}>
                      <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={contactHandler}
                      >
                        <Form>
                          <Grid container spacing={2}>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 6}
                            >
                              <Textfield
                                name="firstName"
                                label="First Name"
                                required={true}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 6}
                            >
                              <Textfield
                                name="lastName"
                                label="Last Name"
                                required={true}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Textfield
                                name="email"
                                label="Email"
                                required={true}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 3}
                            >
                              <Select
                                name="countryCode"
                                label="Code"
                                required={true}
                                options={countryCode}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 9}
                            >
                              <Textfield
                                name="phone"
                                label="Phone"
                                required={true}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 6}
                            >
                              <Select
                                name="occupation"
                                label="Occupation"
                                options={occupationData}
                                required={true}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={windowDimensions.width < 760 ? 12 : 6}
                            >
                              <Textfield name="company" label="Company Name" />
                            </Grid>
                            <Grid item xs={12}>
                              <Select
                                name="purpose"
                                label="Purpose"
                                required={true}
                                options={purposeData}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Textfield
                                name="message"
                                label="Write to us!"
                                multiline={true}
                                rows={3}
                              />
                            </Grid>
                          </Grid>
                          <FormButton type="submit">Submit</FormButton>
                        </Form>
                      </Formik>
                    </div>
                  </Container>
                </Grid>
              </Grid>
            </FormWrapper>
          </FormContainer>
        </FormContent>
      </FormWrap>
    </ScreenContainer>
  );
};

export default ContactSection;
