using System;

using Xamarin.Forms;

namespace chorie
{
	public class ActvityPage : ContentPage
	{
		public ActvityPage()
		{
			var layout = new AbsoluteLayout();

			var bottomStack = new StackLayout {BackgroundColor = Color.Olive };
			AbsoluteLayout.SetLayoutBounds(bottomStack, new Rectangle(0, 1, 1, .15));
			AbsoluteLayout.SetLayoutFlags(bottomStack, AbsoluteLayoutFlags.All);

			var leftStack = new StackLayout { BackgroundColor = Color.Red };
			AbsoluteLayout.SetLayoutBounds(leftStack, new Rectangle(0, 0, .15, .85));
			AbsoluteLayout.SetLayoutFlags(leftStack, AbsoluteLayoutFlags.All);

			layout.Children.Add(bottomStack);
			layout.Children.Add(leftStack);

			Content = layout;




		}
	}
}

