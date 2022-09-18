import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [inbox, setInbox] = useState("");

	function handleInboxInputChange (e) {
		const value = e.target.value || '';
		setInbox(value.toLowerCase());
	}

	function handleSubmit(e) {
		e.preventDefault();
		Router.push("/inbox/" + inbox);
		setIsMenuOpen(false);
	}

	return (
		<header>
			<div className="relative bg-white">
				<div className="mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<Link href="/">
								<a>
									<span className="sr-only">Workflow</span>
									{/* <img className="h-8 w-auto sm:h-10" src="/logo.svg" /> */}
									<div className="h-8 w-auto">
										<Image
											src="/logo.svg"
											alt="mloflo.ml"
											height={40}
											width="100%"
											layout="fixed"
										/>
									</div>
								</a>
							</Link>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<button
								type="button"
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								aria-expanded="false"
								onClick={() => setIsMenuOpen(true)}
							>
								<span className="sr-only">Open menu</span>
								{/* <!-- Heroicon name: outline/menu --> */}
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<nav className="hidden md:flex space-x-10">
							<Link
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Solutions
							</Link>
							<Link
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Pricing
							</Link>
							<Link
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Docs
							</Link>

							<Link
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								More
							</Link>
						</nav>
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<form className="flex items-center" onSubmit={handleSubmit}>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="inbox"
									type="text"
									placeholder="view-this-inbox"
									value={inbox}
									onChange={handleInboxInputChange}
								/>
								<button
									type="submit"
									className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
								>
									View Inbox
								</button>
							</form>
						</div>
					</div>
				</div>

				{/* Mobile menu, show/hide based on mobile menu state. */}
				{isMenuOpen && (
					<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
							<div className="pt-5 pb-6 px-5">
								<div className="flex items-center justify-between">
									<div>
										<div className="h-8 w-auto">
											<Image
												src="/logo.svg"
												alt="mloglo.ml"
												width={50}
												height={50}
												layout="intrinsic"
											/>
										</div>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
											onClick={() => setIsMenuOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											{/* <!-- Heroicon name: outline/x --> */}
											<svg
												className="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="py-6 px-5 space-y-6">
								<div className="grid grid-cols-2 gap-y-4 gap-x-8">
									<Link
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Solutions
									</Link>

									<Link
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Pricing
									</Link>

									<Link
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Docs
									</Link>

									<Link
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										More
									</Link>
								</div>
								<div>
									<Link
										href="#"
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Sign up
									</Link>
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										{/* Existing customer? &nbsp;
										<Link
											href="#"
											className="text-indigo-600 hover:text-indigo-500"
										>
											Sign in
										</Link> */}
										<form className="flex items-center" onSubmit={handleSubmit}>
											<input
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												id="inbox"
												type="text"
												placeholder="view-this-inbox"
												value={inbox}
												onChange={handleInboxInputChange}
											/>
											<button
												type="submit"
												className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
											>
												View Inbox
											</button>
										</form>
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
