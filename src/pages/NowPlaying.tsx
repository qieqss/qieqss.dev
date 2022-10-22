import axios from 'axios';
import React from 'react';
import Nav from '../components/Nav';
import Spotify from '/src/assets/spotify.webp';
import { FaSpinner } from 'react-icons/fa';
import styles from '/src/styles/pages/NowPlaying.module.scss';
import Footer from '../components/Footer';

const NowPlaying: React.FC = () => {
    interface SpotifyStatus {
        active_on_discord_desktop: boolean;
        active_on_discord_mobile: boolean;
        active_on_discord_web: boolean;
        activities: string[];
        dsicord_status: string;
        discord_user: object;
        kv: SVGForeignObjectElement;
        listening_to_spotify: boolean;
        spotify: any;
    }

    const [loading, setLoading] = React.useState(true);
    const [spotifyStatus, setSpotifyStatus] = React.useState<SpotifyStatus>();
    const DISCORD_ID = '756799853530447932';

    React.useEffect(() => {
        async function fetchSpotifyStatus() {
            setLoading(true);
            const { data } = await axios
                .get(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
                .then(({ data }) => data);
            console.log(data);
            setLoading(false);
            setSpotifyStatus(data);
        }
        fetchSpotifyStatus();
    }, []);

    return (
        <div className="row">
            <Nav />
            <div className={styles.text}>
                <h1 className={styles.title}>Now Playing</h1>
                <p className={styles.description}>
                    Currently playing song on Spotify. It is read from my Discord presence using{' '}
                    <a
                        className={styles.anchor}
                        href="https://github.com/Phineas/lanyard"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lanyard
                    </a>
                    .
                </p>
                <div className={styles.spotify__status}>
                    {loading ? (
                        <FaSpinner className={styles.spinner} fontSize={48} />
                    ) : spotifyStatus?.listening_to_spotify ? (
                        // nothing, because im always offline on discord :p
                        <></>
                    ) : (
                        <div className={styles.not__playing}>
                            <img src={Spotify} width={100} height={100} alt="" />
                            <h2 className={styles['not__playing--text']}>Not playing Spotify currently</h2>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NowPlaying;
