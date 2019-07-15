export const PROJECT_DATA = {
    1:
        {
            name: 'Human Robot Team Observation App',
            desc:
                'An application that helps in monitoring Human-Robot Teams involved with disaster robotics. ' +
                'The supervisor can monitor and log behavior of human-robot teams such as bugs, mistakes, distracted etc. ' +
                'These logs can be viewed and shared from the app after it has been completed.\n ' +
                'This application was built for Dr. Robin Murphy of Texas A&M University for her work with the Centre for ' +
                'Robotics Assisted Search and Recovery. It is being used live on the field for hurricane relief and other' +
                'robotics assisted disaster relief management.' +
                'HRTO was built using React Native for both Android and iOS. Both the apps are live in ' +
                'Google Play Store and iOS App Store respectively.',
            links:
                [
                    {
                        link_name: 'GitHub',
                        link_url: 'https://github.com/AkshayeAnithaPradeep/Human-Robot-Team-Observer-Tool'
                    },
                    {
                        link_name: 'iOS App Store',
                        link_url: 'https://apps.apple.com/us/app/human-robot-team-observation/id1462337506?ls=1'
                    },
                    {
                        link_name: 'Google Play Store',
                        link_url: 'https://play.google.com/store/apps/details?id=com.hrtov2'
                    }
                ]
        }
    ,
    2: {
        name: 'Study Tracker',
        desc:
            'Through this  application, we create a platform for students to enter study goals, track amount of ' +
            'time spent working on a goal and their progress for a given topic, and also the ability to adjust ' +
            'goals. A student should be able to enter his study goals and the number of hours he/she has planned ' +
            'on studying the subject per week. He should then be able to plan a schedule by which he will be able ' +
            'to meet his study goals. He should, at any point of time, be able to view his planned schedule and how ' +
            'much of it he has completed. He should also be able to view his weekly schedule in a calendar.\n' +
            '\n' +
            'Our application, Study Tracker, initially takes the information about a student’s study goals and his ' +
            'proposed schedule and sets up a dashboard view where he can see his progress and upcoming study ' +
            'sessions. It also provides a calendar view where he can see his schedule populated graphically. From ' +
            'the dashboard, he will be able to update his study goals as well as tweak his schedule. If he is unable' +
            ' to complete planned study sessions, he can reschedule it to a later time.',
        links:
            [
                {
                    link_name: 'Website',
                    link_url: 'https://studytracker-tamu.herokuapp.com'
                },
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/HolyRail/Study-Tracker'
                }
            ]
    }
    ,
    3: {
        name: 'FaceZam',
        desc:
            'Ensemble-CNN model for facial emotion recognition on FER2013 and a comparative study with a Random ' +
            'Forest Classifier.\n. Built a real-time system to detect faces from a video feed and continuously ' +
            'classify them using our model, demonstrating the ability to transfer skills learned on the static ' +
            'datasets.\n',
        links:
            [
                {
                    link_name: 'Website',
                    link_url: 'https://facezam.onrender.com/'
                },
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/aggiegoldencompany/Facezam'
                }
            ]
    }
    ,
    4: {
        name: 'aiTunes',
        desc:
            'We present a novel approach to queue music to a user based on his present emotional state and the ' +
            'session-based data instead of historical user data. Unlike most recommenders, we propose the ' +
            'recommendation of songs based on the user’s current emotional state which can be inferred from the ' +
            'songs he listens to in any session. Additionally, we feel session-based data is more important than ' +
            'historical data while suggesting music during a user’s session.\n' +
            'Emotion from valence & arousal:\n' +
            'We have used valence and arousal values of songs to predict their emotions. As illustrated here, ' +
            'variations in the ratio of the 2 values signify different emotions conveyed in the songs.\n' +
            'Dataset: We used the DEAM dataset – The MediaEval Database for Emotional Analysis of Music. This ' +
            'contains 1802 songs annotated with valence and arousal values, as well as, the extracted features.\n' +
            'Audio Feature Extraction: Using Python’s librosa library, we extracted 14 MFCC features for every 2 ' +
            'seconds of the first 60 seconds of an mp3 file with a sampling rate of 22,050. The adjacent graph shows ' +
            'the normalized values of features for songs of different emotions.\n' +
            'Recommendation system: We set up our recommender system to find out the top 10 songs most similar to ' +
            'the current song user is listening to. We followed a simple weighted combination principle of metadata ' +
            'similarity and valence- arousal similarity between 2 songs.\n' +
            '𝑓𝑠𝑖𝑚 𝑠1, 𝑠2 = 𝛼𝑓𝑚𝑒𝑡𝑎 𝑠1, 𝑠2 + 𝛽𝑓𝑣𝑎𝑙𝑎𝑟𝑜 𝑠1, 𝑠2\n' +
            'After scoring all the other songs in the dataset using the above equation, we computed a list of 10 ' +
            'songs with the best similarity scores.\n' +
            'Session History Modelling: After the user ends the session, we use the session history to recommend ' +
            'songs to the user in the beginning of the next session with a DNN model to calculate the most likely ' +
            'arousal and valence values of the next song and use these values to compute the song with the best ' +
            'similarity score, this time only using the emotional similarity.',
        links:
            [
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/aggiegoldencompany/aiTunes'
                }
            ]
    }
    ,
    5: {
        name: 'Doodle Recognition',
        desc:
            'Introduction: Doodle recognition has important consequences in computer vision and pattern recognition, ' +
            'especially in relation to the handling of noisy datasets. Quick, Draw! was released as an experimental ' +
            'game to educate the public in a playful way about how AI works. The game prompts users to draw an image ' +
            'depicting a certain category, such as banana, table, etc. The game generated more than 1B drawings, of ' +
            'which a subset was publicly released as the basis for this competitions training set. That subset ' +
            'contains 50M drawings encompassing 340 label categories. Using this classified dataset, I built a ' +
            'classifier to assign hand-drawn doodles from my application into unique categories. This task is tricky ' +
            'due to the wide variation of doodles within even a single category, and confusing similarity between ' +
            'doodles across multiple categories.\n' +
            'Dataset: I am using the Quick Draw Doodle Dataset from Kaggle. It is a collection of millions of ' +
            'drawings across 340 categories. The drawings were captured as timestamped vectors, tagged with metadata ' +
            'including what the player was asked to draw and in which country the player was located. Two versions of ' +
            'the data are given. The raw data is the exact input recorded from the user drawing, while the simplified ' +
            'version removes unnecessary points from the vector information. (For example, a straight line may have ' +
            'been recorded with 8 points, but since you only need 2 points to uniquely identify a line, 6 points can ' +
            'be dropped.) The simplified files are much smaller and provide effectively the same information.\n' +
            'Preprocessing: I used the simplified version of the dataset for my model. As mentioned before, the drawings ' +
            'were captured as timestamped vectors. Each drawing was composed of stroke information, and not as ' +
            'actual doodle images. Therefore, I had to convert them into images by drawing the strokes on a plot ' +
            'and then saving them as images. The images were normalized with size 256 × 256.\n' +
            'Residual Networks: A residual neural network (ResNet) is a neural network of a kind that builds on ' +
            'constructs known from pyramidal cells in the cerebral cortex. To avoid problems like the vanishing ' +
            'gradient problem and saturation and degradation of accuracy with increasing network depths, residual ' +
            'networks skips over some layers. Skipping effectively simplifies the network, using fewer layers in the ' +
            'initial training stages. This speeds learning by reducing the impact of vanishing gradients, as there ' +
            'are fewer layers to propagate through. The network then gradually restores the skipped layers as it ' +
            'learns the feature space. Towards the end of training, when all layers are expanded, it stays closer to ' +
            'the manifold[clarification needed] and thus learns faster. These residual networks are easier to ' +
            'optimize, and can gain accuracy from considerably increased depth. ResNet models provide very high ' +
            'accuracies with affordable model sizes. They are ideal for cases when high accuracy of classification ' +
            'is required.\n' +
            'ResNet-34: ResNet-34 is an ensemble of 34-layes of residual networks that has been pretrained on the ' +
            'ImageNet dataset. The reason why resnet34 is used is because its performance to accuracy trade off is ' +
            'fine for image recognition is good. The architecture of Resnet34 along with it’s sizes is given below.\n' +
            'One Cycle Training: In the paper, Leslie Smith describes an approach to set hyper-parameters (namely ' +
            'learning rate, momentum and weight decay) and batch size. In particular, he suggests 1 Cycle policy to ' +
            'apply learning rates. The author recommends to do one cycle of learning rate of 2 steps of equal length. ' +
            'We choose maximum learning rate using range test. We use lower learning rate as 1/5th or 1/10th of ' +
            'maximum learning rate. We go from lower learning rate to higher learning rate in step 1 and back to ' +
            'lower learning rate in step 2. We pick this cycle length slightly lesser than total number of epochs to ' +
            'be trained. And in last remaining iterations, we annihilate learning rate way below lower learning ' +
            'rate value(1/10 th or 1/100 th).\n' +
            'The motivation behind this is that, during the middle of learning when learning rate is higher, the ' +
            'learning rate works as regularisation method and keep network from overfitting. This helps the network ' +
            'to avoid steep areas of loss and land better flatter minima.\n' +
            'Baseline: Since the dataset consists of 340 classes and more than 20,000 images for each class, ' +
            'I initially create a working baseline model with a small subset of classes. Therefore, I trained the ' +
            'data on 500 images each for 10 classes with the ResNet-34 pretrained model. The training was run for 30' +
            ' epochs using the One-Cycle training method. I was able to achieve a training accuracy of 95% and ' +
            'validation accuracy of 92% for this baseline model.\n' +
            'Improving The Model: For my model, I decided to go with 50 classes of doodles that can be input by the ' +
            'user. Therefore, I trained the model on 500 images each of the 50 classes for 30 epochs. As seen in the ' +
            'architecture above, the ResNet-34 model has 3 layer groups. I additionally unfroze the last layer group ' +
            'in the model completely so that the model performs better on my data.',
        links:
            [
                {
                    link_name: 'Website',
                    link_url: 'https://doodle-recognition.onrender.com/'
                },
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/AkshayeAnithaPradeep/DoodleRecogniton-NeuralNet'
                }
            ]
    }
    ,
    6: {
        name: 'Person Reidentification in the Wild',
        desc:
            'Person re-identification in the wild involves finding targeted people across different space-time ' +
            'locations, where occlusion and body postures pose significant challenges. Our problem statement ' +
            'involves matching specified images against a gallery of persons in another camera view by measuring ' +
            'the similarity between the images. We propose to use Attention mechanism in our Neural Networks to ' +
            'extract more discriminative information from images. We build a residual attention network, which can' +
            ' incorporate with state-of-art feed forward network architecture in an end-to-end training fashion, ' +
            'that can detect features that stand out which can then be used to classify the image. Additionally, ' +
            'we are planning to use Refined Part Pooling to match outliers incurred during the attention based ' +
            'partitioning and assigns them to the parts they most closely  match, thereby enhancing consistency ' +
            'within the parts they are assigned to. We initially augment our input using random erasing so as to ' +
            'prevent over-fitting and to make our model more robust.',
        links:
            [
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.tamu.edu/kevinmcneff/Fall-AI-Person-Reidentification'
                }
            ]
    }
    ,
    7: {
        name: 'Piper: Music Genre Detector',
        desc:
            'An android application that identifies the genre of a song using the concepts of artificial neural ' +
            'networks.',
        links:
            [
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/AkshayeAnithaPradeep/Piper'
                }
            ]
    }
    ,
    8: {
        name: 'Canteen Management System',
        desc:
            'A web application with which a canteen admin can keep track of monthly users and a ' +
            'canteen user can view his monthly expenses.',
        links:
            [
                {
                    link_name: 'GitHub',
                    link_url: 'https://github.com/AkshayeAnithaPradeep/Canteen-Management-System'
                }
            ]
    }
};