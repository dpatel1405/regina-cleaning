function ServiceArea() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
                        Service Areas
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        We Serve All of Regina & Beyond
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Based in Regina, SK — serving the entire city and surrounding communities.
                    </p>
                </div>

                {/* Areas Grid + Map */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left - Areas List */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6">
                            Areas We Cover
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Downtown Regina</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Harbour Landing</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Lakeview</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Whitmore Park</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Hillsdale</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Wascana</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Normanview</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Emerald Park</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">Pilot Butte</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                                <span className="text-green-700 font-bold">✓</span>
                                <span className="text-gray-700 text-sm">White City</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <p className="text-gray-900 font-semibold mb-2">
                                Not sure if we cover your area?
                            </p>
                            <p className="text-gray-500 text-sm mb-4">
                                Give us a call and we will let you know right away. We are always expanding our service area!
                            </p>
                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all">
                                📞 Call (306) 555-0198
                            </button>
                        </div>
                    </div>

                    {/* Right - Map */}
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <iframe
                            title="Regina Service Area Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82665.01545840613!2d-104.7183334!3d50.4451668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f93e51b5b4b%3A0x531c200757ba9da9!2sRegina%2C%20SK!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ServiceArea;