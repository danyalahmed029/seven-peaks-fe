import { articles } from '../../data/bookmarks';
import ArticleCard from '../../components/article-card';

const SignupPage = () => {
    return (
        <div className="login-container">
            <form>
                <h3>Create your account</h3>

                <label for="email">Email</label>
                <input type="text" placeholder="Enter your Email" id="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="Enter your Password" id="password" />

                <label for="confirmpassword">Confirm Password</label>
                <input type="password" placeholder="Enter your Confirm Password" id="confirmpassword" />

                <button>Signup</button>
                <div className='account-span'>
                    <span>
                        Have an account?
                        <a class="link" href="#">
                            Login
                        </a>
                    </span>
                </div>
            </form>
        </div>
    )
};

export default SignupPage;