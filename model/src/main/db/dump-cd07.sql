--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-0+deb10u1)
-- Dumped by pg_dump version 14.2

-- Started on 2023-02-03 11:49:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE cd07;
--
-- TOC entry 3043 (class 1262 OID 16397)
-- Name: cd07; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE cd07 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect cd07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3044 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 215 (class 1259 OID 70362)
-- Name: artist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artist (
    id_artist integer NOT NULL,
    artist_name character varying(50) NOT NULL,
    artist_bio character varying(500) NOT NULL
);


--
-- TOC entry 214 (class 1259 OID 70360)
-- Name: artist_id_artist_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artist_id_artist_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3045 (class 0 OID 0)
-- Dependencies: 214
-- Name: artist_id_artist_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artist_id_artist_seq OWNED BY public.artist.id_artist;


--
-- TOC entry 217 (class 1259 OID 70370)
-- Name: disc; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.disc (
    id_disc integer NOT NULL,
    id_artist integer NOT NULL,
    disc_name character varying(50) NOT NULL,
    producer character varying(50) NOT NULL
);


--
-- TOC entry 216 (class 1259 OID 70368)
-- Name: disc_id_disc_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.disc_id_disc_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3046 (class 0 OID 0)
-- Dependencies: 216
-- Name: disc_id_disc_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.disc_id_disc_seq OWNED BY public.disc.id_disc;


--
-- TOC entry 219 (class 1259 OID 70383)
-- Name: disc_song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.disc_song (
    id_disc_song integer NOT NULL,
    id_song integer,
    id_disc integer
);


--
-- TOC entry 218 (class 1259 OID 70381)
-- Name: disc_song_id_disc_song_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.disc_song_id_disc_song_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3047 (class 0 OID 0)
-- Dependencies: 218
-- Name: disc_song_id_disc_song_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.disc_song_id_disc_song_seq OWNED BY public.disc_song.id_disc_song;


--
-- TOC entry 209 (class 1259 OID 70323)
-- Name: gender; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gender (
    id_gender integer NOT NULL,
    gender_name character varying(20) NOT NULL
);


--
-- TOC entry 208 (class 1259 OID 70321)
-- Name: gender_id_gender_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.gender_id_gender_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3048 (class 0 OID 0)
-- Dependencies: 208
-- Name: gender_id_gender_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.gender_id_gender_seq OWNED BY public.gender.id_gender;


--
-- TOC entry 207 (class 1259 OID 70310)
-- Name: list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.list (
    id_list integer NOT NULL,
    id_user integer NOT NULL,
    list_name character varying(50) NOT NULL
);


--
-- TOC entry 206 (class 1259 OID 70308)
-- Name: list_id_list_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.list_id_list_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3049 (class 0 OID 0)
-- Dependencies: 206
-- Name: list_id_list_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.list_id_list_seq OWNED BY public.list.id_list;


--
-- TOC entry 213 (class 1259 OID 70344)
-- Name: list_song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.list_song (
    id_list_song integer NOT NULL,
    id_list integer,
    id_song integer
);


--
-- TOC entry 212 (class 1259 OID 70342)
-- Name: list_song_id_list_song_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.list_song_id_list_song_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3050 (class 0 OID 0)
-- Dependencies: 212
-- Name: list_song_id_list_song_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.list_song_id_list_song_seq OWNED BY public.list_song.id_list_song;


--
-- TOC entry 211 (class 1259 OID 70331)
-- Name: song; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.song (
    id_song integer NOT NULL,
    id_gender integer,
    song_name character varying(60) NOT NULL,
    song_length time without time zone
);


--
-- TOC entry 210 (class 1259 OID 70329)
-- Name: song_id_song_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.song_id_song_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3051 (class 0 OID 0)
-- Dependencies: 210
-- Name: song_id_song_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.song_id_song_seq OWNED BY public.song.id_song;


--
-- TOC entry 199 (class 1259 OID 70213)
-- Name: trole; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole (
    id_rolename integer NOT NULL,
    rolename character varying(255),
    xmlclientpermission character varying(10485760)
);


--
-- TOC entry 198 (class 1259 OID 70211)
-- Name: trole_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_id_rolename_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3052 (class 0 OID 0)
-- Dependencies: 198
-- Name: trole_id_rolename_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_id_rolename_seq OWNED BY public.trole.id_rolename;


--
-- TOC entry 205 (class 1259 OID 70292)
-- Name: trole_server_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole_server_permission (
    id_role_server_permission integer NOT NULL,
    id_rolename integer,
    id_server_permission integer
);


--
-- TOC entry 204 (class 1259 OID 70290)
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trole_server_permission_id_role_server_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3053 (class 0 OID 0)
-- Dependencies: 204
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trole_server_permission_id_role_server_permission_seq OWNED BY public.trole_server_permission.id_role_server_permission;


--
-- TOC entry 203 (class 1259 OID 70281)
-- Name: tserver_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tserver_permission (
    id_server_permission integer NOT NULL,
    permission_name character varying(10485760)
);


--
-- TOC entry 202 (class 1259 OID 70279)
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tserver_permission_id_server_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3054 (class 0 OID 0)
-- Dependencies: 202
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tserver_permission_id_server_permission_seq OWNED BY public.tserver_permission.id_server_permission;


--
-- TOC entry 197 (class 1259 OID 70153)
-- Name: tuser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser (
    id_user integer NOT NULL,
    user_ character varying(50) NOT NULL,
    password character varying(50),
    name character varying(50),
    surname character varying(50),
    email character varying(50),
    userblocked timestamp(6) without time zone,
    lastpasswordupdate timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP,
    firstlogin numeric(1,0) DEFAULT 1
);


--
-- TOC entry 196 (class 1259 OID 70151)
-- Name: tuser_id_user_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3055 (class 0 OID 0)
-- Dependencies: 196
-- Name: tuser_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_id_user_seq OWNED BY public.tuser.id_user;


--
-- TOC entry 201 (class 1259 OID 70263)
-- Name: tuser_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_role (
    id_user_role integer NOT NULL,
    id_rolename integer,
    id_user integer
);


--
-- TOC entry 200 (class 1259 OID 70261)
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tuser_role_id_user_role_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3056 (class 0 OID 0)
-- Dependencies: 200
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tuser_role_id_user_role_seq OWNED BY public.tuser_role.id_user_role;


--
-- TOC entry 2855 (class 2604 OID 70365)
-- Name: artist id_artist; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist ALTER COLUMN id_artist SET DEFAULT nextval('public.artist_id_artist_seq'::regclass);


--
-- TOC entry 2856 (class 2604 OID 70373)
-- Name: disc id_disc; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc ALTER COLUMN id_disc SET DEFAULT nextval('public.disc_id_disc_seq'::regclass);


--
-- TOC entry 2857 (class 2604 OID 70386)
-- Name: disc_song id_disc_song; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc_song ALTER COLUMN id_disc_song SET DEFAULT nextval('public.disc_song_id_disc_song_seq'::regclass);


--
-- TOC entry 2852 (class 2604 OID 70326)
-- Name: gender id_gender; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender ALTER COLUMN id_gender SET DEFAULT nextval('public.gender_id_gender_seq'::regclass);


--
-- TOC entry 2851 (class 2604 OID 70313)
-- Name: list id_list; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list ALTER COLUMN id_list SET DEFAULT nextval('public.list_id_list_seq'::regclass);


--
-- TOC entry 2854 (class 2604 OID 70347)
-- Name: list_song id_list_song; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list_song ALTER COLUMN id_list_song SET DEFAULT nextval('public.list_song_id_list_song_seq'::regclass);


--
-- TOC entry 2853 (class 2604 OID 70334)
-- Name: song id_song; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.song ALTER COLUMN id_song SET DEFAULT nextval('public.song_id_song_seq'::regclass);


--
-- TOC entry 2847 (class 2604 OID 70216)
-- Name: trole id_rolename; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole ALTER COLUMN id_rolename SET DEFAULT nextval('public.trole_id_rolename_seq'::regclass);


--
-- TOC entry 2850 (class 2604 OID 70295)
-- Name: trole_server_permission id_role_server_permission; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission ALTER COLUMN id_role_server_permission SET DEFAULT nextval('public.trole_server_permission_id_role_server_permission_seq'::regclass);


--
-- TOC entry 2849 (class 2604 OID 70284)
-- Name: tserver_permission id_server_permission; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission ALTER COLUMN id_server_permission SET DEFAULT nextval('public.tserver_permission_id_server_permission_seq'::regclass);


--
-- TOC entry 2844 (class 2604 OID 70156)
-- Name: tuser id_user; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser ALTER COLUMN id_user SET DEFAULT nextval('public.tuser_id_user_seq'::regclass);


--
-- TOC entry 2848 (class 2604 OID 70266)
-- Name: tuser_role id_user_role; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role ALTER COLUMN id_user_role SET DEFAULT nextval('public.tuser_role_id_user_role_seq'::regclass);


--
-- TOC entry 3033 (class 0 OID 70362)
-- Dependencies: 215
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.artist VALUES (0, 'Jarabe de Palo', 'Uno de los grandes iconos del pop español');
INSERT INTO public.artist VALUES (2, 'Red Hot Chili Peppers', 'Grupo californiano que mezclan funk con rock');
INSERT INTO public.artist VALUES (3, 'Deftones', 'Deftones is an American alternative metal band formed in Sacramento, California in 1988. It was formed by Chino Moreno (lead vocals, rhythm guitar), Stephen Carpenter (lead guitar), Abe Cunningham (drums) and Dominic Garcia (bass). During their first five years, the band''s lineup changed several times, but stabilized in 1993 when Cunningham rejoined after his departure in 1990; by this time, Chi Cheng was bassist.');
INSERT INTO public.artist VALUES (1, 'Alva Noto', 'Carsten Nicolai (18 September 1965), known as Alva Noto, is a German musician and visual artist. He is a member of the music groups Diamond Version[2] with Olaf Bender (Byetone), Signal with Frank Bretschneider[3] and Olaf Bender, Cyclo with Ryoji Ikeda, ANBB with Blixa Bargeld, ALPHABET with Anne-James Chaton,[4] Opto with Thomas Knak, and Alva Noto + Ryuichi Sakamoto with whom he composed the score for the 2015 film The Revenant.');
INSERT INTO public.artist VALUES (4, 'Def Leppard', 'Def Leppard are an English rock band formed in 1977 in Sheffield and is considered part of the new wave of British heavy metal movement. Since 1992, the band has consisted of Joe Elliott (lead vocals), Rick Savage (bass, backing vocals), Rick Allen (drums, backing vocals), Phil Collen (guitars, backing vocals), and Vivian Campbell (guitars, backing vocals), which has been the band''s longest running line-up.');
INSERT INTO public.artist VALUES (5, 'Def Jef', 'Def Jef didn''t get his break until he moved to California and signed with Delicious Vinyl. Released a few solo albums before retreating behind the boards to do production for the likes of 2Pac, Boss and Tha Eastsidaz.');
INSERT INTO public.artist VALUES (6, 'Mos Def', 'Brooklyn, NYC-based rapper of Trinidadian descent, Dante "Beze" Terrell Smith (better known simply as Mos Def) is also making a career as a Hollywood actor.');
INSERT INTO public.artist VALUES (7, 'Alvin Lee', 'Alvin Lee (born 19 December 1944, Nottingham, Nottinghamshire, England – died 6 March 2013, Estepona, Spain) was an English singer and guitarist, best known as the lead vocalist and lead guitarist of the blues rock band Ten Years After. In the 1970''s Lee occupied the renowned Hook End Manor, building an early residential studio there Sarm Hook End');
INSERT INTO public.artist VALUES (8, 'Dave Alvin', 'American guitarist, producer, singer and songwriter born November 11, 1955, in Downey, California, USA. Brother of Phil Alvin, also of The Blasters');
INSERT INTO public.artist VALUES (9, 'Alvin Robinson', 'Vocalist and guitarist. Alvin ‘‘Shine’’ Robinson grew up in the fertile New Orleans music scene of the 1950s and became one of the city’s favorite guitarists and leading sidemen. He worked with Professor Longhair, Big Joe Turner, Dr. John, Allen Toussaint, David Lastie, James Booker, and Harold Battiste.');


--
-- TOC entry 3035 (class 0 OID 70370)
-- Dependencies: 217
-- Data for Name: disc; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disc VALUES (2, 1, 'Prototypes', 'Alva Noto');
INSERT INTO public.disc VALUES (1, 0, 'La Flaca', 'Hay que mirarlo!!!!!');
INSERT INTO public.disc VALUES (3, 2, 'By the Way', 'Rick Rubin');
INSERT INTO public.disc VALUES (6, 3, 'White Pony', 'Terry Date');
INSERT INTO public.disc VALUES (7, 3, 'Koi No Yokan', 'Matt Hyde');
INSERT INTO public.disc VALUES (8, 4, 'On Through The Night', 'Tom Allon');


--
-- TOC entry 3037 (class 0 OID 70383)
-- Dependencies: 219
-- Data for Name: disc_song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disc_song VALUES (1, 1, 2);
INSERT INTO public.disc_song VALUES (2, 2, 2);
INSERT INTO public.disc_song VALUES (3, 3, 2);
INSERT INTO public.disc_song VALUES (4, 4, 2);
INSERT INTO public.disc_song VALUES (5, 5, 2);
INSERT INTO public.disc_song VALUES (6, 6, 6);
INSERT INTO public.disc_song VALUES (7, 7, 6);
INSERT INTO public.disc_song VALUES (8, 8, 6);
INSERT INTO public.disc_song VALUES (9, 9, 6);
INSERT INTO public.disc_song VALUES (10, 10, 6);
INSERT INTO public.disc_song VALUES (11, 11, 3);
INSERT INTO public.disc_song VALUES (12, 12, 3);
INSERT INTO public.disc_song VALUES (13, 13, 3);
INSERT INTO public.disc_song VALUES (14, 14, 3);
INSERT INTO public.disc_song VALUES (15, 15, 3);
INSERT INTO public.disc_song VALUES (16, 16, 7);
INSERT INTO public.disc_song VALUES (17, 17, 7);
INSERT INTO public.disc_song VALUES (18, 18, 7);
INSERT INTO public.disc_song VALUES (19, 19, 7);
INSERT INTO public.disc_song VALUES (20, 20, 7);
INSERT INTO public.disc_song VALUES (21, 21, 8);
INSERT INTO public.disc_song VALUES (22, 22, 8);
INSERT INTO public.disc_song VALUES (23, 23, 8);
INSERT INTO public.disc_song VALUES (24, 24, 8);
INSERT INTO public.disc_song VALUES (25, 25, 8);


--
-- TOC entry 3027 (class 0 OID 70323)
-- Dependencies: 209
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.gender VALUES (1, 'Alternative metal');
INSERT INTO public.gender VALUES (2, 'Rock');
INSERT INTO public.gender VALUES (3, 'Minimal electronic');


--
-- TOC entry 3025 (class 0 OID 70310)
-- Dependencies: 207
-- Data for Name: list; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.list VALUES (3, 1, 'Summer ends');
INSERT INTO public.list VALUES (10, 0, 'Best of March');
INSERT INTO public.list VALUES (11, 0, 'Electro-acoustic');
INSERT INTO public.list VALUES (12, 0, 'Lives');
INSERT INTO public.list VALUES (13, 0, 'Beach');
INSERT INTO public.list VALUES (14, 0, 'Play');


--
-- TOC entry 3031 (class 0 OID 70344)
-- Dependencies: 213
-- Data for Name: list_song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.list_song VALUES (47, 12, 2);
INSERT INTO public.list_song VALUES (48, 12, 12);
INSERT INTO public.list_song VALUES (49, 12, 18);
INSERT INTO public.list_song VALUES (50, 12, 4);
INSERT INTO public.list_song VALUES (51, 12, 16);
INSERT INTO public.list_song VALUES (52, 12, 6);
INSERT INTO public.list_song VALUES (53, 13, 6);
INSERT INTO public.list_song VALUES (54, 13, 2);
INSERT INTO public.list_song VALUES (55, 13, 7);
INSERT INTO public.list_song VALUES (56, 12, 7);


--
-- TOC entry 3029 (class 0 OID 70331)
-- Dependencies: 211
-- Data for Name: song; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.song VALUES (1, 3, 'Garment', '06:36:00');
INSERT INTO public.song VALUES (2, 3, 'Villa Aurora', '01:49:00');
INSERT INTO public.song VALUES (3, 3, 'Pax', '00:54:00');
INSERT INTO public.song VALUES (4, 3, 'Argonaut', '07:35:00');
INSERT INTO public.song VALUES (5, 3, 'Stalker', '05:06:00');
INSERT INTO public.song VALUES (6, 1, 'Feiticeira', '03:09:00');
INSERT INTO public.song VALUES (7, 1, 'Digital Bath', '04:15:00');
INSERT INTO public.song VALUES (8, 1, 'Elite', '04:01:00');
INSERT INTO public.song VALUES (9, 1, 'RX Queen', '04:27:00');
INSERT INTO public.song VALUES (10, 1, 'Street Carp', '02:41:00');
INSERT INTO public.song VALUES (11, 2, 'By The Way', '03:37:00');
INSERT INTO public.song VALUES (12, 2, 'Universally Speaking', '04:19:00');
INSERT INTO public.song VALUES (13, 2, 'This Is The Place', '04:17:00');
INSERT INTO public.song VALUES (14, 2, 'Dosed', '05:12:00');
INSERT INTO public.song VALUES (15, 2, 'Don''t Forget Me', '04:37:00');
INSERT INTO public.song VALUES (16, 1, 'Swerve City', '02:45:00');
INSERT INTO public.song VALUES (17, 1, 'Romantic Dreams', '04:38:00');
INSERT INTO public.song VALUES (18, 1, 'Leathers', '04:09:00');
INSERT INTO public.song VALUES (19, 1, 'Poltergeist', '03:31:00');
INSERT INTO public.song VALUES (20, 1, 'Entombed', '04:59:00');
INSERT INTO public.song VALUES (21, 2, 'Rock Brigade', '03:08:00');
INSERT INTO public.song VALUES (22, 2, 'Hello America', '03:56:00');
INSERT INTO public.song VALUES (23, 2, 'Sorrow Is A Woman', '03:56:00');
INSERT INTO public.song VALUES (24, 2, 'It Could Be You', '02:33:00');
INSERT INTO public.song VALUES (25, 2, 'Satellite', '04:29:00');


--
-- TOC entry 3017 (class 0 OID 70213)
-- Dependencies: 199
-- Data for Name: trole; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trole VALUES (0, 'admin', '<?xml version="1.0" encoding="UTF-8"?><security></security>');


--
-- TOC entry 3023 (class 0 OID 70292)
-- Dependencies: 205
-- Data for Name: trole_server_permission; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trole_server_permission VALUES (10, 0, 10);
INSERT INTO public.trole_server_permission VALUES (11, 0, 11);
INSERT INTO public.trole_server_permission VALUES (12, 0, 12);
INSERT INTO public.trole_server_permission VALUES (13, 0, 13);
INSERT INTO public.trole_server_permission VALUES (14, 0, 14);
INSERT INTO public.trole_server_permission VALUES (15, 0, 15);
INSERT INTO public.trole_server_permission VALUES (16, 0, 16);


--
-- TOC entry 3021 (class 0 OID 70281)
-- Dependencies: 203
-- Data for Name: tserver_permission; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tserver_permission VALUES (0, 'com.ontimize.mbx.api.core.service.IUserAndRoleService/userQuery');
INSERT INTO public.tserver_permission VALUES (1, 'com.ontimize.jee.common.services.user.IUserInformationService/getUserInformation');
INSERT INTO public.tserver_permission VALUES (2, 'com.ontimize.jee.common.services.mail.IMailService/sendMail');
INSERT INTO public.tserver_permission VALUES (3, 'com.ontimize.jee.common.services.mail.IMailService/sendMailWithoutAttach');
INSERT INTO public.tserver_permission VALUES (4, 'com.ontimize.jee.common.services.i18n.II18nService/getAvailableBundles');
INSERT INTO public.tserver_permission VALUES (5, 'com.ontimize.jee.common.services.i18n.II18nService/getBundle');
INSERT INTO public.tserver_permission VALUES (6, 'com.ontimize.jee.common.services.i18n.II18nService/getBundles');
INSERT INTO public.tserver_permission VALUES (7, 'com.ontimize.jee.common.services.i18n.II18nService/getAllResourceBundles');
INSERT INTO public.tserver_permission VALUES (8, 'com.ontimize.jee.common.services.i18n.II18nService/getAvailableLocales');
INSERT INTO public.tserver_permission VALUES (9, 'com.ontimize.jee.common.services.i18n.II18nService/updateBundleValues');
INSERT INTO public.tserver_permission VALUES (10, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/getPreference');
INSERT INTO public.tserver_permission VALUES (11, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/getDefaultPreference');
INSERT INTO public.tserver_permission VALUES (12, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/setPreference');
INSERT INTO public.tserver_permission VALUES (13, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/setDefaultPreference');
INSERT INTO public.tserver_permission VALUES (14, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/savePreferences');
INSERT INTO public.tserver_permission VALUES (15, 'com.ontimize.jee.common.services.preferences.IRemoteApplicationPreferencesService/loadPreferences');
INSERT INTO public.tserver_permission VALUES (16, 'com.ontimize.jee.common.services.i18n.II18nService/deleteBundleValues');


--
-- TOC entry 3015 (class 0 OID 70153)
-- Dependencies: 197
-- Data for Name: tuser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser VALUES (1, 'demo2', 'demouser2', 'demo2', 'demo2', NULL, NULL, '2020-07-12 11:31:37.005387', 1);
INSERT INTO public.tuser VALUES (2, 'testUser', NULL, 'test', 'testSurname', NULL, NULL, '2020-07-21 13:25:29.923784', 1);
INSERT INTO public.tuser VALUES (0, 'demo', 'demouser', 'Ann', 'Smith', 'anna@mail.com', NULL, '2020-06-09 11:31:19.631', 1);


--
-- TOC entry 3019 (class 0 OID 70263)
-- Dependencies: 201
-- Data for Name: tuser_role; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser_role VALUES (0, 0, 0);


--
-- TOC entry 3057 (class 0 OID 0)
-- Dependencies: 214
-- Name: artist_id_artist_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artist_id_artist_seq', 9, true);


--
-- TOC entry 3058 (class 0 OID 0)
-- Dependencies: 216
-- Name: disc_id_disc_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.disc_id_disc_seq', 8, true);


--
-- TOC entry 3059 (class 0 OID 0)
-- Dependencies: 218
-- Name: disc_song_id_disc_song_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.disc_song_id_disc_song_seq', 25, true);


--
-- TOC entry 3060 (class 0 OID 0)
-- Dependencies: 208
-- Name: gender_id_gender_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.gender_id_gender_seq', 3, true);


--
-- TOC entry 3061 (class 0 OID 0)
-- Dependencies: 206
-- Name: list_id_list_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.list_id_list_seq', 14, true);


--
-- TOC entry 3062 (class 0 OID 0)
-- Dependencies: 212
-- Name: list_song_id_list_song_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.list_song_id_list_song_seq', 56, true);


--
-- TOC entry 3063 (class 0 OID 0)
-- Dependencies: 210
-- Name: song_id_song_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.song_id_song_seq', 25, true);


--
-- TOC entry 3064 (class 0 OID 0)
-- Dependencies: 198
-- Name: trole_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_id_rolename_seq', 1, false);


--
-- TOC entry 3065 (class 0 OID 0)
-- Dependencies: 204
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_role_server_permission_seq', 1, false);


--
-- TOC entry 3066 (class 0 OID 0)
-- Dependencies: 202
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tserver_permission_id_server_permission_seq', 1, false);


--
-- TOC entry 3067 (class 0 OID 0)
-- Dependencies: 196
-- Name: tuser_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_id_user_seq', 2, true);


--
-- TOC entry 3068 (class 0 OID 0)
-- Dependencies: 200
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_id_user_role_seq', 1, false);


--
-- TOC entry 2877 (class 2606 OID 70367)
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id_artist);


--
-- TOC entry 2879 (class 2606 OID 70375)
-- Name: disc disc_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc
    ADD CONSTRAINT disc_pkey PRIMARY KEY (id_disc);


--
-- TOC entry 2881 (class 2606 OID 70388)
-- Name: disc_song disc_song_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc_song
    ADD CONSTRAINT disc_song_pkey PRIMARY KEY (id_disc_song);


--
-- TOC entry 2871 (class 2606 OID 70328)
-- Name: gender gender_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id_gender);


--
-- TOC entry 2869 (class 2606 OID 70315)
-- Name: list list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id_list);


--
-- TOC entry 2875 (class 2606 OID 70349)
-- Name: list_song list_song_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list_song
    ADD CONSTRAINT list_song_pkey PRIMARY KEY (id_list_song);


--
-- TOC entry 2873 (class 2606 OID 70336)
-- Name: song song_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.song
    ADD CONSTRAINT song_pkey PRIMARY KEY (id_song);


--
-- TOC entry 2861 (class 2606 OID 70221)
-- Name: trole trole_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole
    ADD CONSTRAINT trole_pkey PRIMARY KEY (id_rolename);


--
-- TOC entry 2867 (class 2606 OID 70297)
-- Name: trole_server_permission trole_server_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT trole_server_permission_pkey PRIMARY KEY (id_role_server_permission);


--
-- TOC entry 2865 (class 2606 OID 70289)
-- Name: tserver_permission tserver_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission
    ADD CONSTRAINT tserver_permission_pkey PRIMARY KEY (id_server_permission);


--
-- TOC entry 2859 (class 2606 OID 70158)
-- Name: tuser tuser_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT tuser_pkey PRIMARY KEY (id_user);


--
-- TOC entry 2863 (class 2606 OID 70268)
-- Name: tuser_role tuser_role_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT tuser_role_pkey PRIMARY KEY (id_user_role);


--
-- TOC entry 2890 (class 2606 OID 70376)
-- Name: disc disc_id_artist_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc
    ADD CONSTRAINT disc_id_artist_fkey FOREIGN KEY (id_artist) REFERENCES public.artist(id_artist);


--
-- TOC entry 2892 (class 2606 OID 70394)
-- Name: disc_song disc_song_id_disc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc_song
    ADD CONSTRAINT disc_song_id_disc_fkey FOREIGN KEY (id_disc) REFERENCES public.disc(id_disc);


--
-- TOC entry 2891 (class 2606 OID 70389)
-- Name: disc_song disc_song_id_song_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disc_song
    ADD CONSTRAINT disc_song_id_song_fkey FOREIGN KEY (id_song) REFERENCES public.song(id_song);


--
-- TOC entry 2886 (class 2606 OID 70316)
-- Name: list list_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.tuser(id_user);


--
-- TOC entry 2888 (class 2606 OID 70350)
-- Name: list_song list_song_id_list_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list_song
    ADD CONSTRAINT list_song_id_list_fkey FOREIGN KEY (id_list) REFERENCES public.list(id_list);


--
-- TOC entry 2889 (class 2606 OID 70355)
-- Name: list_song list_song_id_song_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list_song
    ADD CONSTRAINT list_song_id_song_fkey FOREIGN KEY (id_song) REFERENCES public.song(id_song);


--
-- TOC entry 2887 (class 2606 OID 70337)
-- Name: song song_id_gender_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.song
    ADD CONSTRAINT song_id_gender_fkey FOREIGN KEY (id_gender) REFERENCES public.gender(id_gender);


--
-- TOC entry 2884 (class 2606 OID 70298)
-- Name: trole_server_permission trole_server_permission_id_rolename_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT trole_server_permission_id_rolename_fkey FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2885 (class 2606 OID 70303)
-- Name: trole_server_permission trole_server_permission_id_server_permission_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT trole_server_permission_id_server_permission_fkey FOREIGN KEY (id_server_permission) REFERENCES public.tserver_permission(id_server_permission);


--
-- TOC entry 2883 (class 2606 OID 70274)
-- Name: tuser_role tuser_role_id_rolename_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT tuser_role_id_rolename_fkey FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2882 (class 2606 OID 70269)
-- Name: tuser_role tuser_role_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT tuser_role_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.tuser(id_user);


-- Completed on 2023-02-03 11:49:17

--
-- PostgreSQL database dump complete
--

