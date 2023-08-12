import "./Startups.css";

export default function Startups() {

    return (
        <div id="startups" className="scroll-el">
            <h1 className="header">Co-founded</h1>
            <div className="startups">
                <div className="startup"  >
                    <h3>Pairhomes</h3>
                    <p>
                        Pairhomes offers a pairing service for safely corresponding and meeting with potential
                        housemates and logistics service for moving into apartments across Nigeria.
                    </p>
                </div>
                <div className="startup"  >
                    <h3>Proptoken</h3>
                    <p>
                        A platform that provides affordable real
                        estate, property and business options for young africans.
                        It also serves as a platform where users can tokenize their
                        assets, buy, sell and swap tokenized shares and trade fractional ownership.
                    </p>
                </div>
            </div>

        </div>
    )
}
