import "./styles.css"
import { useForm } from "react-hook-form"

export default function App() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isDirty, isValid }
	} = useForm({
		defaultValues: {
			agreement: true,
			name: "furkan",
			email: "ulutasfurkan@gmail.com"
		}
	})

	console.log("isDirty", isDirty, "isValid", isValid)

	const watchAll = watch()
	const watchName = watch("name")
	console.log(watchName)

	const onSubmit = (data) => {
		if (watchAll.name == "furkan") {
			alert("DOGRU!")
		}

		console.log("data", data)

		const dataPost = {
			ConfigurationValue: {
				...data
			},
			LocalizationData: {
				...data
			}
		}

		console.log("ConfigurationValue", dataPost)
	}

	console.log("errors", errors)

	return (
		<div className="container">
			<div className="row">
				<div className="column">
					<div className="left-half">
						<h1>Contact Us</h1>
						<p>We're open for any suggestion or just to have a chat.</p>

						<form onSubmit={handleSubmit(onSubmit)}>
							<p className="input-label">Agreement * </p>
							<input
								className="input"
								type="checkbox"
								placeholder="Agreement"
								{...register("agreement", {
									required: true
								})}
							/>
							{errors.name && (
								<span className="error">
									{errors.agreement?.type === "required" &&
										"This field is required"}
								</span>
							)}

							<p className="input-label">Name * </p>
							<input
								className="input"
								type="text"
								placeholder="Name"
								{...register("name", {
									required: true,
									maxLength: 80
								})}
							/>
							{errors.name && (
								<span className="error">
									{errors.name.type === "required" && "This field is required"}
									{errors.name.type === "maxLength" &&
										"Max length of name is 80 char."}
								</span>
							)}

							<p className="input-label">Email * </p>
							<input
								className="input"
								type="text"
								placeholder="Email"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
								})}
							/>
							{errors.email && (
								<span className="error">
									{errors.email.type === "required" && "This field is required"}
									{errors.email.type === "pattern" && "Invalid email address."}
								</span>
							)}

							<p className="input-label">Phone</p>
							<input
								className="input"
								type="text"
								placeholder="Phone"
								{...register("phoneNumber", {
									required: false,
									pattern: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
								})}
							/>
							{errors.phoneNumber && (
								<span className="error">Invalid Phone Number</span>
							)}

							<p className="input-label">Message *</p>
							<input
								className="input"
								type="text"
								placeholder="Write your message"
								{...register("message", {
									required: true
								})}
							/>
							{errors.message && (
								<span className="error">This field is required</span>
							)}

							<button
								className="submit"
								type="submit"
								disabled={!isDirty || !isValid}
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
				<div className="column">
					<img src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
				</div>
			</div>
		</div>
	)
}
