import css from "./BookForm.module.css";
import { Formik, Field, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

export default function BookForm() {
  return (
    <div className={css.formContainer}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          // Здесь можно добавить логику для отправки данных
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.formGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.formControl}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.formControl}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                className={css.formControl}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.formControl}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
