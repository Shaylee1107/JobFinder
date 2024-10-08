<h1>Job Finder</h1>

  ````diff
@@ shaylee1107.github.io/JobFinder/ @@
````

<img width="1437" alt="image" src="https://github.com/user-attachments/assets/465488b8-6cad-4358-b23a-0e0a182a79eb">



<h2>Description:</h2>
<p>Job Finder is a website programmed with JavaScript and React.js for job seekers to search, veiw, and apply for jobs provided by the Adunza API. Users can also add jobs to their favorites tab, which is managed by local storage.</p>

<h2>Features:</h2>
<ul>
  <li>Navbar: gives users easy access to the home and favorites page.</li>
  <li>Search Bar: finds jobs related to the title and location specified.</li>
  <li>Filter Search: narrows down the search even more based on either a salary minimum, full/part time hours, sorting order, or an employment type.</li>
  <li>Favorites: users may favorite a job by clicking the bookmark icon and veiw/manage all their favorite jobs.</li>
  <li>Page Navigation Arrows: provides the users access to mulitple pages of job results. </li>
</ul>

<h2>User Flow:</h2>
<p>When first opening the Job Finder website, the Adunza API fetches and displays the data of random jobs anywhere in the US. The navbar allows navigation between the home page by clicking the "Job Finder" text or location marker icon, and the favorites tab by clicking the text "Favorites". On the homepage, the user may click the white bookmark icon besides any of the job's title to add that job to their favorites, making the bookmark icon go from white to blue. In the favorites tab, the user may click the blue bookmark icon to remove the job from their favorites. After unfavoriting a job, that job will show the job title along with "has been removed..." beside it, and blue clickable text that says "Undo". Clicking the "Undo" text will re-favorite the job and make it show all the job details again with a blue bookmark icon. If the user clicks on the favorites tab and has not favorited any jobs, an image of a heart with a line through it appears along with text saying there are no favorites to show.</p>
<p>On the homepage, the user may interact with any individual or a mix of the search features. The two main search features are by typing the job title and a specific location, which the user must hit the "search" button to submit. There are also filtering search drop-down options to narrow the search by a salary minimum, full/part time hours, sort by categories, or an employment type. These filtering options are applied to the search immediately after selecting any option.</p>
<p>Each job displays information such as: job title, company, location, salary, and descripton. Each job has a bookmark icon that can be pressed to add the job to the favorites page. There is also a "More Details" button that opens the Adunza website on a new tab for the user to veiw more info about that specific job, and they may also apply. The next page arrows provide a left and right navigation between the search results, and what page they are currently on. If there are no jobs to show or no more search results, an image of a man checking a file with spider webs is displayed along with an apology that there are no results. </p>

<h2>Adunza API</h2>

  ````diff
@@ https://developer.adzuna.com/ @@
````

<p>The Adunza API allows access to information about jobs available all over the globe, including outside of the US, like New England. This API also has lots of other great filtering options to optimize great search narrowing. But the Adunza API does NOT provide an image of the company logo or further info like the job requirments. Although, it does allow access to info about employment data over how salary data has changed over time, and other metrics about the overall job market. </p>

<h2>Cloning and Running this Project</h2>
<ol>
  <li>In the JobSearch repository, press the green "< > Code" button.</li>
  <li>From the options, at the bottom press "Download ZIP".</li>
  <li>Go to your downloads folder on your computer/machine.</li>
  <li>Find and press the "JobFinder-main.zip".</li>
  <li>A folder called "JobFinder-main" will be created in your downloads. Move this folder somewhere outside of your downloads, for example, in "Documents".</li>
  <li>In your terminal, cd into the "JobFinder-main" folder.</li>
  <li>Run the command "git init".</li>
  <li>Run the command "npm install".</li>
  <li>Run the command "git add ."</li>
  <li>Run the command "git commit -m 'adding files'" </li>
  <li>Finally, run the command "npm start" to run the project in your local browser.</li>
</ol>

<h2>Testing:</h2>
<p>You may run the tests in the terminal by using the command "npm run test". If prompted with options on how to run the tests, press "a" to run all the tests at once.</p>



