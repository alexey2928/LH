import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectServices, fetchAllServices } from "../slices/servicesSlice";

const ServicesList = () => {
	const dispatch = useDispatch();

	const services = useSelector(selectServices);

	useEffect(() => {
		dispatch(fetchAllServices());
	}, [dispatch]);

	if (!services.length) return "Loading. Please wait";

	return (
		<div>
			<h1 className="header text-center">Services</h1>
			<div className="container-fluid">
				<div className="row row-cols-3">
					{services.map((service) => (
						<div className="col" key={service.id}>
							<div className="card-group">
								<div className="card mb-3" style={{ width: "33rem" }}>
									<h2 className="card-title text-center">{service.name}</h2>
									<h4 className="card-text">${service.price}.00</h4>
									<button>Book Service</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesList;
